import Statistics from 'components/Statistics/Statistics';
import Timer from 'components/Timer/Timer';
import StartTrainningWrapper from 'components/StartTrainingWrapper/StartTrainingWrapper';
import MobileTrainingPage from 'components/MobileTrainingPage/MobileTrainingPage';

import { Container } from 'components/Common/Common.styled';
import { Section } from 'components/Common/Common.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentPlanning } from 'Redux/Planning/planningOperations';
import { selectIsPlanningActive, selectShowResultsSection } from 'Redux/Planning/planningSelectors';
import { useMediaQuery } from 'react-responsive';

const TrainingPage = () => {
	const showResults = useSelector(selectShowResultsSection);
	const dispatch = useDispatch();
	const isPlanningActive = useSelector(selectIsPlanningActive)
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
