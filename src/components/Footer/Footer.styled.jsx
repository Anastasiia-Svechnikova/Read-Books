import styled from '@emotion/styled';

export const Text = styled.p`
	color: ${p => p.theme.colors.textSecondary};
	text-align: center;
	margin-right: 20px;
	font-size: 13px;
	@media screen and (min-width: 768px) {
		margin: 0;
	}
`;

export const Span = styled.span`
	color: ${p => p.theme.colors.brand};
	text-decoration: underline;
	cursor: pointer;
`;

export const FooterWrap = styled.footer`
	background-color: ${p => p.theme.colors.white};
`;

export const Wrap = styled.div`
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		height: 50px;
		padding: 10px 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;
