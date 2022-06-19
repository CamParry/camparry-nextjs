import { MDXRemoteSerializeResult } from 'next-mdx-remote'


export type PostMDX = {
    title: string,
    date: string,
    excerpt: string,
    tags: [string],
    mdx: MDXRemoteSerializeResult,
    slug: string,
}