import type { FC } from 'react';
import Head from 'next/head';

type TProps = {
	meta: {
		title: string;
		description: string;
	};
};

export const SEO = ({ meta }: TProps) => {
	return (
		<Head>
			<title>{meta.title} | Cam Parry</title>
			<meta name="description" content={meta.description} />
		</Head>
	);
};
