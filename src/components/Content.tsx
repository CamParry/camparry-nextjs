import type { ReactNode } from 'react';

type TProps = {
	children: ReactNode;
};

export const Content = ({ children }: TProps) => {
	return (
		<div className="my-4 mx-auto flex w-[80rem] max-w-full grow flex-col px-[10%]">
			{children}
		</div>
	);
};
