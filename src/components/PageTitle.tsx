import type { ReactNode } from 'react';

type TProps = {
	children: ReactNode;
	element?: keyof JSX.IntrinsicElements;
};

export const PageTitle = ({ children, element = 'h1' }: TProps) => {
	const Tag = element;
	return <Tag className="text-3xl font-bold leading-tight">{children}</Tag>;
};
