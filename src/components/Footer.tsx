import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faInstagram,
	faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
	const socials = [
		{
			title: 'Instagram',
			url: 'https://instagram.com/mrcamparry',
			icon: faInstagram
		},
		{ title: 'GitHub', url: 'https://github.com/camparry', icon: faGithub },
		{
			title: 'LinkedIn',
			url: 'https://linkedin.com/cam-parry',
			icon: faLinkedinIn
		}
	];

	return (
		<footer className="mt-auto flex items-end justify-between py-4 px-[5%]">
			<div className="my-4 w-4/5 translate-x-[-5vw] border-t-4 border-b-4 border-t-yellow border-b-dark"></div>
			<ul className="fixed bottom-8 right-[5%] flex list-none flex-col items-center gap-4">
				{socials.map((item, key) => (
					<li key={key}>
						<Link href={item.url} passHref>
							<a aria-label={item.title}>
								<FontAwesomeIcon
									icon={item.icon}
									className="h-8 transition-transform duration-200 hover:scale-110 hover:text-yellow"
								/>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</footer>
	);
};
