// import  CustomLabel from './CustomLabel/CustomLabel';
import Results from 'components/Results/Results';
import useTranslation from 'Hooks/useTranslations';
import {
	// LineChart,
	// Line,
	// XAxis,
	// CartesianGrid,
	// Tooltip,
	// LabelList,
	// ResponsiveContainer,
} from 'recharts';
import {
	StatisticsSection,
	StatisticsBox,
	StatisticsTitle,
	// StatisticsText,
	StartTrainingBtn,
	StartTrainingBox,
	StatisticDaysSpan,
} from './Statistics.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectPlanFact,
	selectDuration,
	selectStartDate,
	selectFinishedPages,
	selectPlanningBooks,
	selectShowResultsSection,
	selectFinishedPagesPerDayChartData,
	selectPagesPerDay,
} from '../../Redux/Planning/planningSelectors';

import {
	showResults,
	addPlanFact,
} from 'Redux/Planning/planningSlice';
import { useEffect } from 'react';
import { createNextDay, dotsPaddingByWidth, normalizeDate } from './functions/functions';
import StatisticsChart from './StatisticsChart/StatisticsChart';


export default function Statistics() {

	const translation = useTranslation();
	const finishedPagesPerDayChartData = useSelector(selectFinishedPagesPerDayChartData)
	const data = useSelector(selectPlanFact);
	const pagesPerDay = useSelector(selectPagesPerDay)
	const isShowResultsSection = useSelector(selectShowResultsSection);
	const books = useSelector(selectPlanningBooks);
	const isShowBtn = !!(books.length)
	const duration = useSelector(selectDuration);
	const getStartDate = useSelector(selectStartDate);
	const finishedPages = useSelector(selectFinishedPages);

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

	// const checkData =
	// 	data?.length > 0 && isShowResultsSection
	// 		? data
	// 		: [{ name: 'Day 0', fact: 5, plan: 10 }];

	const createObjByPlan = () => {
		const startDate = new Date(getStartDate);
	
		if (books?.length > 0) {
			const totalPagesByBooks = books.reduce((total, { pagesTotal }) => total + pagesTotal, 0)
			const totalPagesPerDay = totalPagesByBooks / duration
			const objPlanFact = [];

			for (let i = 1; i <= duration; i += 1) {
				if (i === 1) {
				console.log(normalizeDate(startDate))
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
		}


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
						<StatisticDaysSpan> {data[0]?.plan ? data[0]?.plan : 0}</StatisticDaysSpan>
					</StatisticsTitle>
					<StatisticsChart pagesPerDay={pagesPerDay } duration ={duration} data = {finishedPagesPerDayChartData}/>
					{/* <ResponsiveContainer width={'99%'} height={215}>
						<LineChart
							width={809}
							height={215}
							data={checkData}
							margin={{
								top: 15,
								right: 50,
								left: 5,
								bottom: 5,
							}}
							
						>
							<CartesianGrid strokeDasharray="0" horizontalPoints={[210]} />
							<XAxis
								dataKey="name"
								hide={true}
								padding={
									checkData?.length <= 1 && { left: dotsPaddingByWidth() }
								}
							/>
z
							<Tooltip />

							<Line
								type="monotone"
								dataKey="plan"
								stroke="#000000"
								fill="#000000"
								activeDot={{ r: 7 }}
								height={5}
								strokeWidth={2}
								dot={{ stroke: '#000000', strokeWidth: 4 }}
								name="PLAN"
							>
								<LabelList content={<CustomLabel type="plan" checkData={ checkData} />} />
							</Line>
							<Line
								type="monotone"
								dataKey="fact"
								stroke="#FF6B08"
								fill="#FF6B08"
								activeDot={{ r: 7 }}
								strokeWidth={2}
								dot={{ stroke: '#FF6B08', strokeWidth: 4 }}
								name="FACT"
							>
								<LabelList content={<CustomLabel type="fact" checkData={ checkData} />} />
							</Line>
						</LineChart>
					</ResponsiveContainer>*/}
					{/* <StatisticsText>{translation.statistics.time}</StatisticsText>  */}
				</StatisticsBox>
				{isShowResultsSection && <Results />}
			</StatisticsSection>
		</>
	);
}
