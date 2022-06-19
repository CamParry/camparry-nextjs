import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type TPost = {
	title: string;
	date: string;
	excerpt: string;
	tags: [string];
	slug: string;
};
