import { validateEmail } from 'utils';

type Values = {
	name: string;
	email: string;
	message: string;
};

type ErrorsType = {
	[key: string]: string;
};

export const validateContactForm = (values: Values) => {
	const errors: ErrorsType = {};

	if (!values.name) {
		errors['name'] = 'Required';
	}

	if (values.name && values.name.length < 2) {
		errors['name'] = 'Too short';
	}

	if (!values.email) {
		errors['email'] = 'Required';
	}

	if (values.email && !validateEmail(values.email)) {
		errors['email'] = 'Invalid';
	}

	if (!values.message) {
		errors['message'] = 'Required';
	}

	if (values.message && values.message.length < 2) {
		errors['message'] = 'Too short';
	}

	return errors;
};
