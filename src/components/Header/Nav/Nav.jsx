import Settings from 'components/Settings/Settings';
import { StyledNav, IconLink, IconLib, IconHome } from './Nav.styled';

const Nav = () => {
	return (
		<StyledNav>
			<Settings />
			<IconLink to={'/training'} aria-label="Training link">
				<IconLib />
			</IconLink>
			<IconLink to={'/library'} aria-label="Library link">
				<IconHome />
			</IconLink>
		</StyledNav>
	);
};
export default Nav;
