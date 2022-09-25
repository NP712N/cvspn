import styled from 'styled-components';
import Link from 'next/link';

const Header = ({ toggleTheme }: any) => {
	return (
		<StyledHeader>
			<StyledNavContainer>
				<StyledNavItem href={'/'}>
					<a>Home</a>
				</StyledNavItem>
				<StyledNavItem href={'/about'}>
					<a>About</a>
				</StyledNavItem>
			</StyledNavContainer>

			<StyledThemeSelectButton onClick={toggleTheme}>Dark</StyledThemeSelectButton>
		</StyledHeader>
	);
};

const StyledHeader = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	margin: auto;
	justify-content: center;
	align-items: center;
	& a + a {
		margin-left: 20px;
	}

	background: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(10px);
`;

const StyledThemeSelectButton = styled.button`
	margin-right: 20px;
	width: 50px;
	height: 30px;
	border: none;
	border-radius: 4px;
	&:hover {
		cursor: pointer;
	}
`;

const StyledNavContainer = styled.div`
	margin: auto;
`;

const StyledNavItem = styled(Link)``;

export default Header;
