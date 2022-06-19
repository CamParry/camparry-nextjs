import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from "@sendgrid/mail";
import { validateEmail } from 'utils'


type ErrorsType = {
	name?: string,
	email?: string,
	message?: string
}


type ResponseProps = {
	error?: {},
}


const validate = (body: any) => {
	const errors: ErrorsType = {}

	if (body.name) {
		if (body.name.length <= 0) errors.name = 'Required'
	} else [
		errors.name = 'Required'
	]

	if (body.email) {
		if (body.email.length <= 0) errors.email = 'Required'
		if (!validateEmail(body.email)) errors.email = 'Invalid email'
	} else {
		errors.email = 'Required'
	}

	if (body.message) {
		if (body.message.length <= 0) errors.message = 'Required'
	} else {
		errors.message = 'Required'
	}

	return errors
}


const enquiry = async (req: NextApiRequest, res: NextApiResponse<ResponseProps>) => {

	const errors = validate(req.body)

	if (Object.keys(errors).length) {
		return res.status(400).json({ error: { errors: errors } });
	}

	const email = "hello@camparry.com"

	const subject = `New enquiry from ${req.body.name}`

	const message = `
		<p><strong>Name:</strong> ${req.body.name}</p>
		<p><strong>Email:</strong> ${req.body.email}</p>
		<p><strong>Message:</strong></p>
		<p>${req.body.message}</p>
	`

	try {
		sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
		await sendgrid.send({
			to: email,
			from: email,
			subject: subject,
			html: message,
		});
		return res.status(200).json({})
	} catch (error: any) {
		return res.status(error.statusCode || 500).json({ error: { message: error.message } });
	}
}


export default enquiry
