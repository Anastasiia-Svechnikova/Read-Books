import { createSelector } from "@reduxjs/toolkit";
import BOOK_CATEGORY from "components/Constants/bookCategories";

export const selectBooksByCategory = category => state => {
	if (category === BOOK_CATEGORY.currentlyReading) {
		const goingToReadIds = state.books.books.goingToRead.map(({ _id }) => _id)
		
		const finishedReadingIds = state.books.books.finishedReading.map(({ _id }) => _id)

		return state.books.books.currentlyReading.filter(({_id})=>!(goingToReadIds.includes(_id)) && !(finishedReadingIds.includes(_id)) );
	}
	return state.books.books[category];
};

export const selectAllBooks = state => state.books.books;
export const selectBooksStatus = state => state.books.status;
export const selectBackupUserName= state => state.books.backupUserName;

export const selectAreFinishedAndCurrentBooksEmpty = createSelector([selectAllBooks], (books) => {
	return !books.currentlyReading.length && !books.finishedReading.length

})