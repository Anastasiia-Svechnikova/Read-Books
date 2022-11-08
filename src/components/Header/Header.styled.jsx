import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/Auth/authSelectors';

const AuthLocation = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return isLoggedIn ? 'space-between' : 'center';
};

export const Head = styled.header`
	justify-content: center;
	top: 0;
	left: 0;
	position: sticky;
	z-index: 1100;
	padding: 8px 0px;
	background-color: ${p => p.theme.colors.white};
	box-shadow: ${p => p.theme.shadow.box};
`;
export const NavAlign = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const HeaderWrapper = styled.div`
	display: grid;
	align-items: center;
	/* justify-content: ${AuthLocation}; */
	grid-template-columns: 1fr 1fr 1fr;
`;
export const HeaderWrapperMobile = styled.div`
	display: grid;
	align-items: center;
	/* justify-content: ${AuthLocation}; */
	grid-template-columns: 1fr 1fr;
`;

