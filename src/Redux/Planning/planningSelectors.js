import { createSelector } from "@reduxjs/toolkit";
import { getCurrentDay, getCurrentWeek, getDayNumber, proceedResultForNullPages, proceedVisibleData } from "Utils/timeValidationFunctions";

export const selectPlanningBooks = state => state.planning.books;
export const selectIsPlanningActive = state => state.planning.isPlanningActive;
export const selectStartDate = state => state.planning.startDate;
export const selectEndDate = state => state.planning.endDate;
export const selectPlanFact = state => state.planning.planFact;
export const selectIsLoadingPlanning = state => state.planning.isLoading;
export const selectDuration = state => state.planning.duration;
export const selectStats = state => state.planning.stats;

export const selectPagesPerDay = state => state.planning.pagesPerDay;

export const selectShowResultsSection = state => state.planning.isShowResults;
export const selectPagesTotal = createSelector([selectPlanningBooks], (books) => {
    return books.reduce((acc, el)=> acc + el.pagesTotal, 0)
})

export const selectPagesFinished = createSelector([selectStats], (stats) => {
    return stats.reduce((acc, el)=> acc + el.pagesCount, 0)
})

export const selectFinishedPagesPerDayChartData = createSelector([selectDuration, selectIsPlanningActive, selectStats, selectStartDate],
    (duration, isPlanningActive, stats, startDate) => {
    if (isPlanningActive && stats.length > 0) {
        const result = [...Array(duration + 1).keys()].map((el, i) =>{
        return { day: i, y: 0,  }
        })
        const currentDay = getCurrentDay(startDate, stats[stats.length - 1])
        const currentWeek = getCurrentWeek(currentDay)
         stats.forEach(el => {
            const dayNumber = getDayNumber(startDate, el.time.split(' ')[0]) + 1
            if (result[dayNumber]) {
                result[dayNumber].y += el.pagesCount
                  result[dayNumber].label = `FACT: ${result[dayNumber].y } pages`  ;
            } else {
                result[dayNumber] = {day: dayNumber, y: el.pagesCount, label: `FACT: ${el.pagesCount} pages`}
            }
        })
        proceedResultForNullPages(result)      
        const proceededToWeekResult = proceedVisibleData(result, currentWeek)       
        return{result: proceededToWeekResult, currentWeek}

    }
    return [{ day: 0, y: 0 }]

})


// -------------------



