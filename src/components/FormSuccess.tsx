import Link from 'next/link';
import Confetti from 'react-confetti';
import { ArrowLeft } from 'components/icons';

export const FormSuccess = () => {
	return (
		<div>
			<h1>Congratulations for being awesome!!!</h1>
			<div className="mt-6 border-darl p4 rounded-2xl border-3">
				<p>
					<strong>
						I'm so happy that you got in touch and I will get back
						to you as quickly as I can!
					</strong>
				</p>
				<p className="mt-4">
					In the mean time feel free to check out{' '}
					<Link href="/blog">
						<a>my blog</a>
					</Link>
					!
				</p>
			</div>
			<Confetti
				recycle={false}
				numberOfPieces={300}
				tweenDuration={2000}
				colors={[
					'#FFC145',
					'#D90368',
					'#00CC66',
					'#2274A5',
					'#725AC1',
					'#E94F37'
				]}
			/>
		</div>
	);
};
