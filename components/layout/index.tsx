import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, toggleTheme }: any) => {
	return (
		<StyledApp>
			<Header toggleTheme={toggleTheme} />

			<StyledMain>{children}</StyledMain>

			<Footer />
		</StyledApp>
	);
};

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const StyledMain = styled.main`
	height: 100%;
	flex: 1;
`;

export default Layout;
