import React from 'react';
import {
	VictoryChart,
	VictoryScatter,
	VictoryAxis,
	VictoryLine,
	VictoryTooltip,
	VictoryVoronoiContainer,
} from 'victory';

class StatisticsChart extends React.Component {
	render() {
		const { data, pagesPerDay, duration, isDesktop, isTablet } = this.props;
		// console.log(data)
		const normalizeDurationToWeek = duration > 7 ? 7 : duration;
		const pagesAxisLabelArray = [0, pagesPerDay, pagesPerDay * 2];
		const tickData = [...Array(normalizeDurationToWeek + 1).keys()].map(
			(el, i) => (i === 0 ? '' : `${i}`)
		);
		const daysArray = [...Array(normalizeDurationToWeek + 1).keys()];
		const averagePagesPerDayLineData = daysArray.map(el => {
			return {
				x: el,
				y: pagesPerDay,
				label: `PLAN: ${pagesPerDay} pages per day`,
			};
		});

		return (
			<VictoryChart
				width={isDesktop ? 850 : isTablet ? 700 : 350}
				domainPadding={{ x: 0, y: 10 }}
				containerComponent={<VictoryVoronoiContainer />}
			>
				<VictoryAxis
					style={{
						axis: { stroke: '#756f6a7e' },
						grid: { stroke: '#756f6a7e', padding: 30 },
					}}
					tickValues={daysArray}
					tickFormat={tickData}
				/>
				<VictoryAxis
					style={
						pagesPerDay
							? {
									axis: { stroke: '#756f6a7e' },

									tickLabels: { fontSize: 14 },
							  }
							: { axis: { stroke: '#756f6a7e' } }
					}
					orientation="left"
					tickValues={pagesAxisLabelArray}
					dependentAxis
				/>
				<VictoryLine
					labelComponent={
						<VictoryTooltip
							cornerRadius={0}
							pointerLength={0}
							flyoutStyle={{
								fill: '#F5F7FA',
								stroke: 'transparent',
							}}
						/>
					}
					style={{
						labels: {
							fontSize: 12,
							lineHeight: 2,
							fontFamily: 'Montserrat',
							fill: 'black',
						},
					}}
					animate={{
						duration: 2000,
						onLoad: { duration: 2000 },
					}}
					interpolation="natural"
					data={averagePagesPerDayLineData}
				/>
				<VictoryLine
					labelComponent={
						<VictoryTooltip
							cornerRadius={0}
							pointerLength={0}
							flyoutStyle={{
								fill: '#F5F7FA',
								stroke: 'transparent',
							}}
						/>
					}
					interpolation="natural"
					animate={{
						duration: 2000,
						onLoad: { duration: 2000 },
					}}
					data={data ? data : [{ day: 0, y: 0, label: 'FACT: 0 pages' }]}
					style={{
						data: {
							stroke: '#f2791c',
						},
						labels: {
							fontSize: 12,
							lineHeight: 2,
							fontFamily: 'Montserrat',
							fill: 'black',
						},
					}}
				/>
				<VictoryScatter
					animate={{
						duration: 2000,
						onLoad: { duration: 2000 },
					}}
					data={[{ x: 0, y: 0 }]}
					size={5}
					style={{ data: { fill: '#f2791c' } }}
				/>
				<VictoryScatter
					animate={{
						duration: 2000,
						onLoad: { duration: 2000 },
					}}
					data={[{ x: 0, y: pagesPerDay }]}
					size={5}
					style={{ data: { fill: 'black' } }}
				/>
			</VictoryChart>
		);
	}
}

export default StatisticsChart;
