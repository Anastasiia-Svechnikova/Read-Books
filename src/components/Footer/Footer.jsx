import useTranslation from 'Hooks/useTranslations';

import { Link } from 'react-router-dom';
import { Text, Span, FooterWrap, Wrap } from './Footer.styled';
import { Container } from 'components/Common/Common.styled';

const Footer = () => {
	const translation = useTranslation();
	return (
		<FooterWrap>
			<Container>
				<Wrap>
					<Text>
						{translation.team.footerText}
						<Link to="/team">
							<Span> TeamSlice</Span>
						</Link>
					</Text>
				</Wrap>
			</Container>
		</FooterWrap>
	);
};

export default Footer;
