import type { ReactNode } from 'react';

type TProps = {
	children: ReactNode;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
};

export const Button = ({
	children,
	type = 'button',
	className = ''
}: TProps) => {
	return (
		<button
			className={`rounded-lg border-3 border-dark px-4 pt-1 font-semibold text-pink ${className}`}
			type={type}
		>
			{children}
		</button>
	);
};
