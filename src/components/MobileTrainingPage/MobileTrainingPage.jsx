import MyGoals from 'components/MyGoals/MyGoals';
import MyTraining from 'components/MyTraining/MyTraining';
import TrainingBookList from 'components/TrainingBookList/TrainingBookList';
import Statistics from 'components/Statistics/Statistics';
import Timer from 'components/Timer/Timer';

import { useSelector } from 'react-redux';
import { selectShowResultsSection } from 'Redux/Planning/planningSelectors';
import { Container } from 'components/StartTrainingWrapper/StartTrainingWrapper.styled';
import { useState } from 'react';
import { PlusBtn } from 'components/Library/MobileLibrary/MobileLibrary.styled';

const MobileTrainingPage = ({ isMobile }) => {
    	const [isMyTrainingOpen, setIsMyTrainingOpen] = useState(false);
    const showResults = useSelector(selectShowResultsSection);
    
    	const toggleMyTrainingOpen = () => {
		setIsMyTrainingOpen(prevState => !prevState);
	};

	return (
        <> {isMyTrainingOpen ? <MyTraining isMobile={isMobile} handleMyTrainingOpen={ toggleMyTrainingOpen} /> :
            
            <>
                {showResults && <Timer />}
			<MyGoals />
			<Container>
				<TrainingBookList isMobile={isMobile} />
			</Container>
            <Statistics />
            {!showResults && <PlusBtn
                type="button"
                onClick={toggleMyTrainingOpen}
                aria-label="Add new training"
            >
                +
            </PlusBtn>}
            
            </>
    }
				
			
		</>
	);
};

export default MobileTrainingPage;
