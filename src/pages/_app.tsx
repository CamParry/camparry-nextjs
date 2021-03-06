import type { AppProps } from 'next/app';
import { Layout } from 'components';
import 'styles/global.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
