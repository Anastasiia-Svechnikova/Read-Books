import MyGoals from 'components/MyGoals/MyGoals';
import MyTraining from 'components/MyTraining/MyTraining';
import TrainingBookList from 'components/TrainingBookList/TrainingBookList';

import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { selectShowResultsSection } from 'Redux/Planning/planningSelectors';
import { Container } from './StartTrainingWrapper.styled';


const StartTrainingWrapper = () => {
	const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });
	const isShowResultsSection = useSelector(selectShowResultsSection);
	return (
		<Container>
			<div>
				{!isShowResultsSection && <MyTraining />}
				<TrainingBookList isMobile={ !isDesktopOrTablet} />
			</div >
			<MyGoals />
		</Container>
	);
};

export default StartTrainingWrapper;
