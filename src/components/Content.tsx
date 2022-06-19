import type { ReactNode } from 'react';

type TProps = {
	children: ReactNode;
};

export const Content = ({ children }: TProps) => {
	return (
		<div className="my-4 mx-auto flex w-full max-w-full flex-grow flex-col py-0 pr-[10%] pl-[5%]">
			{children}
		</div>
	);
};
