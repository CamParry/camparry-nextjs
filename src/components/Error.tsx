type TProps = {
	title: string;
	text: string;
};

export const Error = ({ title, text }: TProps) => {
	return (
		<div className="flex h-full grow flex-col items-center justify-center">
			<h1 className="text-center text-7xl">{title}</h1>
			<p className="mb-8 text-center text-3xl">{text}</p>
		</div>
	);
};
