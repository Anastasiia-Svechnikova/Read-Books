import PrivateRoute from 'components/Private/PrivateRoute';
import PublicRoute from 'components/Public/PublicRoute';
import LogInPage from 'Pages/LogInPage/LogInPage';
import RegisterPage from 'Pages/RegisterPage/RegisterPage';
import HomePage from 'Pages/HomePage';
import Layout from 'Layout/Layout';
import API from 'Services/Api/Api';

import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Navigate,
	Route,
	Routes,
	useSearchParams,
	useNavigate,
} from 'react-router-dom';
import { fetchCurrentUser } from 'Redux/Auth/authOperation';
import { googleAuth } from 'Redux/Auth/authSlice';
import { selectIsRefreshed, selectIsLogOut } from 'Redux/Auth/authSelectors';

const LibraryPage = lazy(() => import('Pages/LibraryPage'));
const TrainingPage = lazy(() => import('Pages/TrainingPage'));
const TeamPage = lazy(() => import('components/Team/Team'));
const StatisticsPage = lazy(() => import('Pages/StatisticsPage'));

export const App = () => {
	const dispatch = useDispatch();
	const isRefreshed = useSelector(selectIsRefreshed);
	const isLogOut = useSelector(selectIsLogOut);
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();
	const accessToken = searchParams.get('accessToken');
	const refreshToken = searchParams.get('refreshToken');
	const sid = searchParams.get('sid');

	useEffect(() => {
		if (accessToken) {
			dispatch(googleAuth({ accessToken, refreshToken, sid }));
			API.setToken(accessToken);
		}
		navigate('/library');

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [accessToken]);

	useEffect(() => {
		if (!isLogOut) dispatch(fetchCurrentUser());
	}, [dispatch, isLogOut]);

	return (
		isRefreshed && (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={
							<PublicRoute restricted redirect={'/library'}>
								<HomePage />
							</PublicRoute>
						}
					/>

					<Route
						path="login"
						element={
							<PublicRoute restricted redirect="/library">
								<LogInPage />
							</PublicRoute>
						}
					/>

					<Route
						path="register"
						element={
							<PublicRoute restricted redirect="/library">
								<RegisterPage />
							</PublicRoute>
						}
					/>
					<Route
						path="library"
						element={
							<PrivateRoute redirect={'/'}>
								<LibraryPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="training"
						element={
							<PrivateRoute redirect={'/'}>
								<TrainingPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="statistics"
						element={
							<PrivateRoute restricted redirect={'/'}>
								<StatisticsPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="team"
						element={
							<PrivateRoute redirect={'/'}>
								<TeamPage />
							</PrivateRoute>
						}
					/>
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		)
	);
};
