import NextLink from 'next/link';
import { FunctionComponent, ReactNode } from 'react';

type TProps = {
	href: string;
	children: ReactNode;
};

export const Link: FunctionComponent<TProps> = ({ href, children }) => {
	if (href.startsWith('/')) {
		return (
			<NextLink href={href} passHref>
				<a>{children}</a>
			</NextLink>
		);
	}

	if (href.startsWith('#')) {
		return <a href={href}>{children}</a>;
	}

	return (
		<a href={href} rel="noopener" target="_black">
			{children}
		</a>
	);
};
