import StartTrainningWrapper from 'components/StartTrainningWrapper/StartTrainningWrapper';
import { Container } from 'components/Common/Common.styled';
import { Section } from 'components/Common/Common.styled';
import Statistics from 'components/Statistics/Statistics';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentPlanning } from 'Redux/Planning/planningOperations';
import { getIsPlanningActive, showResultsSection } from 'Redux/Planning/planningSelectors';
import Timer from 'components/Timer/Timer';
import { useMediaQuery } from 'react-responsive';
import MobileTrainingPage from 'components/MobileTrainingPage/MobileTrainingPage';

const TrainingPage = () => {
	const showResults = useSelector(showResultsSection);
	const dispatch = useDispatch();
	const isPlanningActive = useSelector(getIsPlanningActive)
	useEffect(() => {
		if (isPlanningActive) {			
			dispatch(getCurrentPlanning());
		}
	}, [dispatch, isPlanningActive]);


	const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });


	return (
		<Section>
			<Container>
				{isDesktopOrTablet ? (
					<>
						{showResults && <Timer />}
						<StartTrainningWrapper />
						<Statistics />
					</>
				) : (
					<MobileTrainingPage isMobile={!isDesktopOrTablet} />
				)}
			</Container>
		</Section>
	);
};
export default TrainingPage;
