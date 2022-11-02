import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'Redux/Auth/authSelectors';


const PrivateRoute = ({ children, redirect }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return isLoggedIn ? children : <Navigate to={redirect} />;
};

export default PrivateRoute;
