import { useState, FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Face } from 'components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/pro-solid-svg-icons';

export const Header: FC = () => {
	const [navOpen, setNavOpen] = useState(false);

	const handleNavToggle = () => {
		setNavOpen(!navOpen);
	};

	const menu = [
		{ title: 'Home', url: '/' },
		{ title: 'Work', url: '/work' },
		{ title: 'Blog', url: '/blog' },
		{ title: 'Chat', url: '/chat' }
	];

	const router = useRouter();

	return (
		<header className="flex items-center py-4 px-[5vw]">
			<Link href={'/'} passHref>
				<a className="relative z-10 flex items-center group">
					<Face
						className="h-12 fill-dark"
						leftEyeClass="transition duration-100 origin-[0% 35%] group-hover:scale-y-0"
					/>
					{router.route !== '/' && (
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.25 }}
							className="ml-4 translate-y-[3px] text-3xl font-bold"
						>
							Cam Parry
						</motion.p>
					)}
				</a>
			</Link>
			<nav className="flex ml-auto">
				<button
					className="relative z-10 hidden text-3xl bg-transparent border-0 text-dark hover:block"
					onClick={() => handleNavToggle()}
				>
					<FontAwesomeIcon icon={faBurger} />
				</button>
				<ul
					className={`fixed top-0 left-0 hidden h-screen w-full list-none flex-col items-center justify-center gap-1 bg-light text-3xl font-semibold md:relative md:flex md:h-auto md:flex-row md:gap-8 md:text-xl ${
						navOpen ? `flex` : ''
					}`}
				>
					{menu.map((item, key) => (
						<li key={key}>
							<Link href={item.url}>
								<a
									className={`block border-b-4 border-transparent p-2 transition-all duration-100 hover:scale-105 hover:text-yellow ${
										router.pathname == item.url
											? 'border-yellow'
											: ''
									}`}
								>
									{item.title}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
