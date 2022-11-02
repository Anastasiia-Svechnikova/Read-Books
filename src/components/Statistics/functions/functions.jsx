export const dotsPaddingByWidth = () => {
	const windowWidth = window.innerWidth;
	if (windowWidth < 768) {
		return -180;
	}
	if (windowWidth >= 768 && windowWidth < 1280) {
		return -562;
	}
	return -782;
};

export const normalizeDate = date => {
	const newDate = new Date(date);
	return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate().toString().padStart(2,'0')}`
};

export const createNextDay = (prevDate, step) => {
	const newDate = new Date(prevDate);
	const nextDay = newDate.setDate(newDate.getDate() + step);
	return normalizeDate(nextDay);
};
