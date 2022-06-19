import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';
import { formatDate } from 'utils';
import { Code, Link } from 'components/MDX';

type TProps = {
	post: {
		title: string;
		date: string;
		excerpt: string;
		tags: [string];
		mdx: MDXRemoteSerializeResult;
		slug: string;
	};
};

export const Post = ({ post }: TProps) => {
	const components = {
		code: Code,
		a: (TProps: any) => <Link {...TProps} />
	};

	return (
		<>
			<h1>{post.title}</h1>
			<div className="border-l-2 border-pink pl-3">
				<p className="mt-4 text-sm">{formatDate(post.date)}</p>
				<p className="mt-2 text-sm font-semibold">
					{post.tags.join(', ')}
				</p>
			</div>
			<hr />
			<MDXRemote {...post.mdx} components={components} />
		</>
	);
};
