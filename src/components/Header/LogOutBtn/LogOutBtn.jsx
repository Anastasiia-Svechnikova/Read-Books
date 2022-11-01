import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { LogoutBtn } from './LogOutBtn.styled';
import { logOut } from 'Redux/Auth/authOperation';
import useTranslation from 'Hooks/useTranslations';
import {ReactComponent as LeaveIcon} from  'Assets/svg/leave.svg';

const LogOutBtn = () => {
	const translation = useTranslation();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogOut = () => {
		dispatch(logOut())
			.unwrap()
			.then(() => {
				Notify.success(`${translation.header.notifyLogout}`);
				navigate('/login');
			})
			.catch(err => {
				Notify.failure(
					`Unfortunately, the exit didn't succeed. Try again later.`
				);
			});
	};
	return (
		<LogoutBtn type="button" onClick={handleLogOut} aria-label="Logout">
			<LeaveIcon width={20} height={20} />
		</LogoutBtn>
	);
};
export default LogOutBtn;
