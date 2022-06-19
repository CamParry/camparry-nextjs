import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const Code = ({ className, children, ...TProps }: any) => {
	children = children.replace(/\n+$/, '');
	const match = /language-(\w+)/.exec(className || '');
	return match ? (
		<SyntaxHighlighter
			language={match[1]}
			children={children}
			// showLineNumbers={true}
			{...TProps}
			wrapLongLines
			style={vscDarkPlus}
			customStyle={{
				opacity: '1',
				borderRadius: '0.5rem',
				padding: '0.75rem 1rem 1rem',
				margin: '0',
				fontSize: '1.5rem',
				lineHeight: '1'
			}}
			codeTagProps={{
				style: {
					fontSize: '0.9rem'
				}
			}}
		/>
	) : (
		<code className={className} {...TProps}>
			{children}
		</code>
	);
};
