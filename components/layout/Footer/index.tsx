import styled from 'styled-components';
import Image from 'next/image';

const Footer = () => {
	return <StyledFooter>
		Powered By Me!
	</StyledFooter>;
};

const StyledFooter = styled.footer`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Footer;
