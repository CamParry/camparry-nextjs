import type { ReactNode } from 'react';
import { Header } from 'components';
import { Footer } from 'components';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

type TProps = {
	children: ReactNode;
};

export const Layout = ({ children }: TProps) => {
	const router = useRouter();

	return (
		<div className="flex flex-col min-h-screen bg-light font-body text-dark">
			<Header />
			<AnimatePresence exitBeforeEnter>
				<motion.main
					key={router.route}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="flex flex-col grow"
				>
					{children}
				</motion.main>
			</AnimatePresence>
			<Footer />
		</div>
	);
};
