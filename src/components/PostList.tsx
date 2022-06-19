import type { TPost } from 'types';
import Link from 'next/link';
import { formatDate } from 'utils';

type TProps = {
	posts: TPost[];
};

export const PostList = ({ posts }: TProps) => {
	return (
		<div className="mx-auto mt-6 w-[32rem] space-y-12">
			{posts.map((post) => (
				<Link href={`/blog/${post.slug}`} key={post.slug} passHref>
					<a className="flex flex-col group rounded-2xl">
						<h2 className="text-2xl font-bold transition-colors group-hover:text-yellow group-focus:text-yellow">
							{post.title}
						</h2>
						<div className="flex items-center gap-4 mt-1">
							<span className="text-sm text-pink">
								{formatDate(post.date)}
							</span>
							<span className="text-xl">|</span>
							<span className="text-sm font-semibold">
								{post.tags.join(', ')}
							</span>
						</div>
						<p className="mt-1 text-lg">{post.excerpt}</p>
					</a>
				</Link>
			))}
		</div>
	);
};
