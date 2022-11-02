import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'Redux/Auth/authSelectors';


const PublicRoute = ({ children, restricted = false, redirect = '/' }) => {

	const isLoggedIn = useSelector(selectIsLoggedIn);
	const shouldRedirect = isLoggedIn  && restricted;
	return shouldRedirect ? <Navigate to={redirect} /> : children;
};

export default PublicRoute;
