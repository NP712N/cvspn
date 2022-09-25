import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../themes';
import Layout from '../components/layout';
import { useState } from 'react';

function MyApp({ Component, pageProps, router }: AppProps) {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		theme == 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<>
			<GlobalStyles theme={theme == 'light' ? lightTheme : darkTheme} />
			<ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
				<Layout router={router} toggleTheme={toggleTheme}>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
