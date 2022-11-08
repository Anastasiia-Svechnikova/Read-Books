import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header = styled.h2`
	margin-bottom: 20px;
	@media screen and (min-width: 768px) {
		margin-bottom: 24px;
	}
`;

export const IconThumb = styled.div`
	display: inline;
	width: fit-content;
	height: fit-content;
`;
export const StyledLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 171px;
	height: 42px;
	margin: 28px auto 0;

	font-size: 16px;
	line-height: 1.21;
	font-weight: 600px;

	color: ${p => p.theme.colors.white};
	background-color: ${p => p.theme.colors.brand};
	transition: ${p => p.theme.transition};
	:hover {
		border: 1px solid ${p => p.theme.colors.textMain};
		background: transparent;
		color: ${p => p.theme.colors.textMain};
	}
	@media screen and (min-width: 768px) {
				margin: 40px auto 0;
					width: 200px;

		height: 40px;
	}
	
`