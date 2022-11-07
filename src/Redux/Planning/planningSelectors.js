import { createSelector } from "@reduxjs/toolkit";

export const selectPlanningBooks = state => state.planning.books;
export const selectIsPlanningActive = state => state.planning.isPlanningActive;
export const selectStartDate = state => state.planning.startDate;
export const selectEndDate = state => state.planning.endDate;
export const selectPlanFact = state => state.planning.planFact;
export const selectIsLoadingPlanning = state => state.planning.isLoading;
export const selectDuration = state => state.planning.duration;
export const selectStats = state => state.planning.stats;

export const selectPagesPerDay = state => state.planning.pagesPerDay;
export const selectFinishedPages = state => state.planning.readedPages;
export const selectPagesFinished = state => state.planning.pagesReaded;
export const selectShowResultsSection = state => state.planning.isShowResults;


export const selectFinishedPagesPerDayChartData = createSelector([selectDuration, selectIsPlanningActive, selectStats, selectStartDate], (duration, isPlanningActive, stats, startDate ) => {
    if (isPlanningActive && stats.length > 0) {
        const result = [...Array(duration + 1).keys()].map((el, i) =>{
        return { day: i, y: 0 }
        })
        stats.forEach(el => {
            const dayNumber = getDayNumber(startDate, el.time.split(' ')[0]) + 1
            if (result[dayNumber]) {
                result[dayNumber].y += el.pagesCount;
            } else {
                result[dayNumber] = {day: dayNumber, y: el.pagesCount}
            }

        })
  

        proceedResultForNullPages(result)

        return result

    }
    return [{ day: 0, y: 0 }]

})


// -------------------



function getDayNumber(start, current) {
    const normalizedCurrent = normalizeCurrentDate(current)
    const diff = new Date(normalizedCurrent) - new Date(start);
    const convertedToDayDiff = diff / 1000 / 60 / 60 / 24
    return Math.floor(convertedToDayDiff) 
}
function normalizeCurrentDate(currentDay) {
    const day = currentDay.split('-')[2];
    const month = currentDay.split('-')[1];
        const year = currentDay.split('-')[0];
    const normalizedDay = day.length === 2 ? day : day.padStart(2, '0')
    const normalizedMonth = month.length === 2 ? month : month.padStart(2, '0')
    return `${year}-${normalizedMonth}-${normalizedDay}`
}
function proceedResultForNullPages(result) {
    result.forEach((el, i) => {
        if (i && el.y === 0) {
            el.y = null
        }
    })
}
// const res = getDayNumber("2022-11-07"
// , '2022-11-07')
// console.log(res)