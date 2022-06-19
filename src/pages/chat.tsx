import type { NextPage } from 'next';
import type { FormEvent } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
	SEO,
	Content,
	Input,
	FormSuccess,
	PageTitle,
	Button
} from 'components';
import { sendEnquiry, validateContactForm, isEmptyObj } from 'utils';

type TErrors = {
	[key: string]: string;
};

const Chat: NextPage = () => {
	const meta = {
		title: 'Chat',
		description: 'The portfolio of Cam Parry'
	};

	const defaultValues = {
		name: '',
		email: '',
		message: ''
	};

	const [values, setValues] = useState(defaultValues);
	const [sending, setSending] = useState(false);
	const [success, setSuccess] = useState(false);
	const [errors, setErrors] = useState<TErrors>({});
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (name: string, value: string) => {
		setValues((prev) => {
			return {
				...prev,
				[name]: value
			};
		});
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setErrorMessage('');
		setErrors({});
		setSuccess(false);
		setSending(true);
		setErrors(validateContactForm(values));
		if (isEmptyObj(errors)) {
			console.log('sending');
			const error = await sendEnquiry(values);
			if (error) {
				setErrorMessage(error.message || '');
				setErrors(error.errors || '');
			} else {
				setSuccess(true);
				setValues(defaultValues);
			}
		}
		setSending(false);
	};

	useEffect(() => {
		setValues(defaultValues);
	}, []);

	return (
		<Content>
			<SEO meta={meta} />
			<form
				className="mx-auto w-[30rem] max-w-[90%]"
				onSubmit={handleSubmit}
			>
				{!success ? (
					<>
						<PageTitle>Get in touch!</PageTitle>
						<Input
							name="name"
							placeholder="name"
							value={values.name}
							handleChange={handleChange}
							error={errors?.name}
						/>
						<Input
							name="email"
							placeholder="email"
							type="email"
							value={values.email}
							handleChange={handleChange}
							error={errors?.email}
						/>
						<Input
							name="message"
							placeholder="message"
							type="textarea"
							value={values.message}
							handleChange={handleChange}
							error={errors?.message}
						/>
						<Button type="submit" className="mt-6">
							{sending ? 'Sending...' : 'Send'}
						</Button>
						{errorMessage && (
							<p className="text-pink">{errorMessage}</p>
						)}
					</>
				) : (
					<FormSuccess />
				)}
			</form>
		</Content>
	);
};

export default Chat;
