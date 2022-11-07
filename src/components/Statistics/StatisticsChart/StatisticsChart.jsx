import React from 'react';
// import * as V from 'victory';
import {
	VictoryChart,
	VictoryScatter,
	VictoryAxis,
	VictoryLine,
} from 'victory';

// function proceedVisibleData() {

// }

// const totalPages = 300;
// const pagesPerDay = 300;

// console.log( [...Array(amountOfDays + 1).keys()].slice(6))

class StatisticsChart extends React.Component {
	render() {
		const { data, pagesPerDay, duration } = this.props;

		const pagesAxisLabelArray = [0, pagesPerDay, pagesPerDay * 2];

		const daysArray = [...Array(duration + 1).keys()];
		const averagePagesPerDayLineData = daysArray.map(el => {
			return { x: el, y: pagesPerDay };
		});

		console.log(data);
		return (
			<VictoryChart
				width={700}
				//    theme={VictoryTheme.material}
				domainPadding={{ x: 0, y: 10 }}
			>
				<VictoryAxis
					// tickValues specifies both the number of ticks and where
					// they are placed on the axis
					style={{
						axis: { stroke: '#756f6a7e' },
						// axisLabel: {fontSize: 20, padding: 30},
						grid: { stroke: '#756f6a7e', padding: 30 },
					}}
					tickValues={daysArray}
					tickFormat={['', '', '', '', '', '', '']}
				/>
				<VictoryAxis
					style={{
						axis: { stroke: '#756f6a7e' },
						// axisLabel: {fontSize: 20, padding: 30},

						tickLabels: { fontSize: 14, padding: 5, color: 'red' },
					}}
					orientation="left"
					tickValues={pagesAxisLabelArray}
					dependentAxis
					// tickFormat specifies how ticks should be displayed
					tickFormat={x => `${x}`}
				/>
				<VictoryLine
					animate={{
						duration: 2000,
						onLoad: { duration: 2000 },
					}}
					interpolation="natural"
					data={averagePagesPerDayLineData}
				/>
				<VictoryLine
					interpolation="natural"
					animate={{
						duration: 2000,
						onLoad: { duration: 2000 },
					}}
					data={data}
					style={{
						data: {
							stroke: '#f2791c',
						},
						labels: {
							fontSize: 15,
							fill: ({ datum }) => (datum.x === 3 ? '#000000' : '#c43a31'),
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
