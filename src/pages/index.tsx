import type { NextPage } from 'next';
import { SEO, Content } from 'components';

const meta = {
	title: 'Home',
	description: 'The homepage of Cam Parry'
};

const Home: NextPage = () => {
	return (
		<div className="my-4 mx-auto flex w-full grow flex-col py-0 pr-[10%] pl-[5%]">
			<SEO meta={meta} />
			<p className="text-[clamp(1.25rem,_6vw,_3rem)] font-light leading-tight">
				Hey there, I&apos;m
			</p>
			<h1 className="mt-4 text-[clamp(2.5rem,_12vw,_6rem)] font-semibold leading-none">
				Cam Parry
			</h1>
			<p className="mt-auto">
				Born and raised in Melbourne, living in Barcelona.
				<br />
				Working as a front end developer for Bow House Digital.
				<br />
				Spending my free time rock climbing, wood working and learning
				spanish.
			</p>
		</div>
	);
};

export default Home;
