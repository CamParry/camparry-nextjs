import type { NextPage } from 'next';
import { SEO, Content, PageTitle } from 'components';

const meta = {
	title: 'Work',
	description: 'The portfolio of Cam Parry'
};

const Work: NextPage = () => {
	return (
		<Content>
			<SEO meta={meta} />
			<PageTitle>My work</PageTitle>
		</Content>
	);
};

export default Work;
