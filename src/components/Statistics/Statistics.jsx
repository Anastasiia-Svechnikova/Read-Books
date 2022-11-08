import StatisticsChart from './StatisticsChart/StatisticsChart';
// import  CustomLabel from './CustomLabel/CustomLabel';
import Results from 'components/Results/Results';
import useTranslation from 'Hooks/useTranslations';
import {
	StatisticsSection,
	StatisticsBox,
	StatisticsTitle,
	StatisticsText,
	StartTrainingBtn,
	StartTrainingBox,
	StatisticDaysSpan,
} from './Statistics.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectPlanFact,
	selectDuration,
	selectStartDate,
	selectPlanningBooks,
	selectShowResultsSection,
	selectFinishedPagesPerDayChartData,
	selectPagesPerDay,
	selectStats,
} from '../../Redux/Planning/planningSelectors';

import {
	showResults,
	addPlanFact,
} from 'Redux/Planning/planningSlice';
import { useCallback, useEffect } from 'react';
import { createNextDay, normalizeDate } from './functions/functions';
import { useMediaQuery } from 'react-responsive';


export default function Statistics() {
	const isDesktop = useMediaQuery({ minWidth: 1280 });
	const isTablet = useMediaQuery({ minWidth: 768 });
	


	const translation = useTranslation();
	const finishedPagesPerDayChartData = useSelector(selectFinishedPagesPerDayChartData)
	const data = useSelector(selectPlanFact);
	const pagesPerDay = useSelector(selectPagesPerDay)
	const isShowResultsSection = useSelector(selectShowResultsSection);
	const books = useSelector(selectPlanningBooks);
	const isShowBtn = !!(books.length)
	const duration = useSelector(selectDuration);
	const getStartDate = useSelector(selectStartDate);
	const finishedPages = useSelector(selectStats);

	const dispatch = useDispatch();

	useEffect(() => {
		if (finishedPages) {
			const totalPages = finishedPages.reduce(
				(total, el) => total + el.pagesCount,
				0
			);
			const updateData = data.map((el, i) => {
				if (i === 0) {
					return (el = { ...el, fact: totalPages });
				}
				return el;
			});

			dispatch(addPlanFact(updateData));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [finishedPages]);


	const createObjByPlan = useCallback( () => {
		const startDate = new Date(getStartDate);
	
		if (books?.length > 0) {
			const totalPagesByBooks = books.reduce((total, { pagesTotal }) => total + pagesTotal, 0)
			const totalPagesPerDay = totalPagesByBooks / duration
			const objPlanFact = [];

			for (let i = 1; i <= duration; i += 1) {
				if (i === 1) {

				objPlanFact.push({
					name: normalizeDate(startDate),
					fact: 0,
					plan: Math.round(totalPagesPerDay * i),
				});
			} else {
				objPlanFact.push({
					name: createNextDay(startDate, i - 1),
					fact: 0,
					plan: Math.round(totalPagesPerDay * i),
				});
			}
		}
			
		return objPlanFact;
	};
		}, [books, duration, getStartDate])


	const handleClickStartTraining = () => {
		dispatch(showResults(true));
		dispatch(addPlanFact(createObjByPlan()));
	};

	return (
		<>
			{isShowBtn && !isShowResultsSection && (
				<StartTrainingBox>
					<StartTrainingBtn type="button" onClick={handleClickStartTraining}>
						{translation.statistics.startBtn}
					</StartTrainingBtn>
				</StartTrainingBox>
			)}
			<StatisticsSection>
				<StatisticsBox>
					<StatisticsTitle>
						{translation.statistics.statTitle}
						<StatisticDaysSpan> {pagesPerDay ?pagesPerDay : 0 }</StatisticDaysSpan>
					</StatisticsTitle>
					<StatisticsChart 
						// darkColor= {}
					 isDesktop={isDesktop}
						isTablet={isTablet}
						pagesPerDay={pagesPerDay}
						currentWeek= {finishedPagesPerDayChartData.currentWeek}
						duration={duration}
						data={finishedPagesPerDayChartData.result} />
				
					<StatisticsText>{translation.statistics.time}  {finishedPagesPerDayChartData.currentWeek} </StatisticsText> 
				</StatisticsBox>
				{isShowResultsSection && <Results />}
			</StatisticsSection>
		</>
	);
}
