export function getDayNumber(start, current) {
    const normalizedCurrent = normalizeCurrentDate(current)
    const diff = new Date(normalizedCurrent) - new Date(start);
    const convertedToDayDiff = diff / 1000 / 60 / 60 / 24
    return Math.floor(convertedToDayDiff) 
}
export function normalizeCurrentDate(currentDay) {
    const day = currentDay.split('-')[2];
    const month = currentDay.split('-')[1];
    const year = currentDay.split('-')[0];
    const normalizedDay = day.length === 2 ? day : day.padStart(2, '0')
    const normalizedMonth = month.length === 2 ? month : month.padStart(2, '0')
    return `${year}-${normalizedMonth}-${normalizedDay}`
}

export function getCurrentWeek(currentDay) {
    if (!currentDay) {
        return 1
    }
     return Math.ceil(currentDay/7)
} 
export function getCurrentDay(startDay, day ) {
    return getDayNumber(startDay, day.time.split(' ')[0])
}

export function proceedResultForNullPages(result) {

    for (let i = 0; i < result.length; i += 1){

        if (i && result[i].y === 0 ) {
            const rest = result.slice(i)
            if (rest.some(el => el.y !== 0)) {
                continue
            }
            result[i].y = null
        }
    }
   
}

export function proceedVisibleData(result, currentWeek) {

    const start = currentWeek - 1;
    const end = currentWeek
    if (currentWeek === 1) {
        return [{ day: 0, y: 0, label: `FACT: 0 pages`}, ...result.slice(start * 7 + 1, end * 7 + 1) ]
    }
    
return result.slice(start * 7 + 1, end * 7 + 1)

}