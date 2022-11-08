import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import UserMenu from './UserMenu/UserMenu';
import LogOutBtn from './LogOutBtn/LogOutBtn';

import { useMediaQuery } from 'react-responsive';
import { selectIsLoggedIn } from 'Redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import { Head, HeaderWrapper, HeaderWrapperMobile, NavAlign } from './Header.styled';
import { Container } from 'components/Common/Common.styled';

const Header = () => {
	const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<Head>
			<Container>
				{isTabletOrDesktop ? <HeaderWrapper>
					<Logo />
					{isLoggedIn && (
						<>
							<UserMenu />

							<NavAlign>
								<Nav />
								<LogOutBtn />
							</NavAlign>
						</>
					)}
				</HeaderWrapper> :
					<HeaderWrapperMobile>
						<Logo />
					{isLoggedIn && (
						<>
							<NavAlign>
								<UserMenu />
								<Nav />
								<LogOutBtn />
							</NavAlign>
						</>
					)}
					</HeaderWrapperMobile>}
				{/* <HeaderWrapper>
					<Logo />
					{isLoggedIn && (
						<>
							{isTabletOrDesktop && <UserMenu />}

							<NavAlign>
								<Nav />
								{!isTabletOrDesktop && <UserMenu />}
								<LogOutBtn />
							</NavAlign>
						</>
					)}
				</HeaderWrapper> */}
			</Container>
		</Head>
	);
};

export default Header;
