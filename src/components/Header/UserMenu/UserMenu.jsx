import { useSelector } from 'react-redux';
import { selectName } from 'Redux/Auth/authSelectors';
import { UserIcon, UserWrapper, UserMeta, UserName } from './UserMenu.styled';
import { useMediaQuery } from 'react-responsive';
import { selectBackupUserName } from 'Redux/Books/booksSelectors';

const UserMenu = () => {
	const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
	const backupUserName = useSelector(selectBackupUserName) ;
	const userName = useSelector(selectName) ?? backupUserName;
	const userIcon = userName?.slice(0, 1).toUpperCase();

	return (
		<UserWrapper>
			{isTabletOrDesktop && 
				<UserMeta>
					<UserIcon>{userIcon}</UserIcon>
					<UserName>{userName}</UserName>
				</UserMeta>}
		</UserWrapper>
	);

	//
};

export default UserMenu;
