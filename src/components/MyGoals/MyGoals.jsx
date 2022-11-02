import React from 'react';
import useTranslation from 'Hooks/useTranslations';
import { useSelector } from 'react-redux';
import { selectPlanningBooks, selectDuration, selectShowResultsSection } from 'Redux/Planning/planningSelectors';
import {
	Title,
	MyGoalsContainer,
	List,
	Counter,
	Text,
	Item,
} from './MyGoals.styled';

const MyGoals = () => {
	const books = useSelector(selectPlanningBooks);
	const duration = useSelector(selectDuration);
	const translation = useTranslation();
	const isShowResultsSection = useSelector(selectShowResultsSection);
	const booksLefts = books.filter(
		({ pagesTotal, pagesFinished }) => pagesTotal !== pagesFinished
	);

	return (
		<MyGoalsContainer>
			<Title>{translation.myGoals.title}</Title>
			{isShowResultsSection ? (
				<List startTraining>
					<Item startTraining>
						<Counter startTraining>{books.length !== 0 ? books.length : '0'}</Counter>
						<Text>{translation.myGoals.text1}</Text>
					</Item>
					<Item startTraining>
						<Counter startTraining>
							{books.length !== 0 ? duration : '0'}
						</Counter>
						<Text>{translation.myGoals.text2}</Text>
					</Item>
					<Item startTraining>
						<Counter active startTraining>
							{booksLefts.length}
						</Counter>
						<Text>{translation.myGoals.text3}</Text>
					</Item>
				</List>
			) : (
				<List>
					<Item>
						<Counter>{books.length !== 0 ? books.length : '0'}</Counter>
						<Text>{translation.myGoals.text1}</Text>
					</Item>
					<Item>
						<Counter>{books.length !== 0 ? duration : '0'}</Counter>
						<Text>{translation.myGoals.text2}</Text>
					</Item>
				</List>
			)}
		</MyGoalsContainer>
	);
};

export default MyGoals;
