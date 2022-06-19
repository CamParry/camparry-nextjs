import type { NextPage } from 'next';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { PostMDX } from 'types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { SEO, Content, Post } from 'components';

type TProps = {
	post: PostMDX;
};

const PostPage: NextPage<TProps> = ({ post }) => {
	const meta = {
		title: `${post.title}`,
		description: 'The portfolio of Cam Parry'
	};

	return (
		<Content>
			<SEO meta={meta} />
			<Post post={post} />
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

export const getStaticProps: GetStaticProps = async (TProps) => {
	const filename = `${TProps.params!.slug}.mdx`;
	const source = fs.readFileSync(path.join('posts', filename), 'utf-8');
	const { content, data } = matter(source);
	const mdx = await serialize(content);
	return {
		TProps: {
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
