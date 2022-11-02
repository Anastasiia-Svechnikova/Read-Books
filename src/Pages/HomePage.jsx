import MobilePage from 'components/MobilePage/MobilePage';
import LoginPage from 'Pages/LogInPage/LogInPage';
import { useMediaQuery } from 'react-responsive';

export default function HomePage() {
	const isTablet = useMediaQuery({
		query: '(min-width: 768px)',
	});

	return <>{isTablet ? <LoginPage /> : <MobilePage />}</>;
}
