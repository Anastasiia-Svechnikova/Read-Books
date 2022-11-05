import React from 'react';
// import * as V from 'victory';
import { VictoryChart, VictoryAxis} from 'victory';

// const totalPages = 300;
const pagesPerDay = 200;
const amountOfDays = 4;
const daysArray = [...Array(amountOfDays + 1).keys()];
const pagesArray =[0, pagesPerDay, pagesPerDay * 2 ]
// const currenDay = 1;
// const pagesFinished = 50;

// const data = [
// 	{ quarter: 1, earnings: 100 },
// 	{ quarter: 2, earnings: 100 },
// 	{ quarter: 3, earnings: 100 },
// 	{ quarter: 4, earnings: 100 },
// ];

class StatisticsChart extends React.Component {
	render() {
		return (
            <VictoryChart
                
				width={700}
				//    theme={VictoryTheme.material}
				domainPadding={{x: 0, y: 10}}
			>
                <VictoryAxis
                    
					// tickValues specifies both the number of ticks and where
					// they are placed on the axis
					style={{
						axis: { stroke: '#756f6a7e' },
						// axisLabel: {fontSize: 20, padding: 30},
						grid: { stroke: '#756f6a7e', padding: 30 }
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
					tickValues={pagesArray}
					dependentAxis
					// tickFormat specifies how ticks should be displayed
					tickFormat={x => `${x}`}
				/>
				{/* <VictoryBar
                   barWidth={1}
        data={data}
        // data accessor for x values
        x="quarter"
        // data accessor for y values
        y="earnings"
        /> */}
			</VictoryChart>
		);
	}
}

export default StatisticsChart;
