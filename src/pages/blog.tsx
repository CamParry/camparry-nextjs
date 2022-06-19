import type { NextPage } from 'next';
import type { TPost } from 'types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { SEO, Content, PostList, PageTitle } from 'components';

type TProps = {
	posts: TPost[];
};

const meta = {
	title: 'Blog',
	description: 'The portfolio of Cam Parry'
};

const Blog: NextPage<TProps> = ({ posts }) => {
	return (
		<Content>
			<SEO meta={meta} />
			<PageTitle>Blog</PageTitle>
			<PostList posts={posts} />
		</Content>
	);
};

export const getStaticProps = async () => {
	const files = fs.readdirSync(path.join('src/posts'));
	const posts = files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(
			path.join('src/posts', filename),
			'utf-8'
		);
		const { data } = matter(markdownWithMeta);
		return {
			title: data.title,
			date: data.date,
			excerpt: data.excerpt,
			tags: data.tags,
			slug: filename.split('.')[0]
		};
	});

	const postsOrdered = posts
		.sort((a: TPost, b: TPost) => {
			return new Date(a.date).valueOf() - new Date(b.date).valueOf();
		})
		.reverse();

	return {
		props: { posts: postsOrdered }
	};
};

export default Blog;
