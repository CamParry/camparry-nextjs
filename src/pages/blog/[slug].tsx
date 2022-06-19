import type { NextPage } from 'next';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { PostMDX } from 'types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { SEO, Content } from 'components';
import { formatDate } from 'utils';
import { MDXRemote } from 'next-mdx-remote';
import { Code, Link } from 'components/MDX';

type TProps = {
	post: PostMDX;
};

const PostPage: NextPage<TProps> = ({ post }) => {
	const meta = {
		title: `${post.title}`,
		description: 'The portfolio of Cam Parry'
	};

	const components = {
		code: Code,
		a: (TProps: any) => <Link {...TProps} />
	};

	return (
		<Content>
			<SEO meta={meta} />
			<h1>{post.title}</h1>
			<div className="pl-3 border-l-2 border-pink">
				<p className="mt-4 text-sm">{formatDate(post.date)}</p>
				<p className="mt-2 text-sm font-semibold">
					{post.tags.join(', ')}
				</p>
			</div>
			<hr />
			<MDXRemote {...post.mdx} components={components} />
		</Content>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync(path.join('posts'));
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.mdx', '')
		}
	}));
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async (props) => {
	const filename = `${props.params!.slug}.mdx`;
	const source = fs.readFileSync(path.join('posts', filename), 'utf-8');
	const { content, data } = matter(source);
	const mdx = await serialize(content);
	return {
		props: {
			post: {
				title: data.title,
				date: data.date,
				excerpt: data.excerpt,
				tags: data.tags,
				mdx: mdx
			}
		}
	};
};

export default PostPage;
