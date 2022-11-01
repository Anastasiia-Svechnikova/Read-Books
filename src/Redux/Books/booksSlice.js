import { createSlice } from '@reduxjs/toolkit';
import STATUS from 'components/Constants/status';
import { getCurrentPlanning } from 'Redux/Planning/planningOperations';
import { addBookReview, addUserBookThunk, getUserBooksThunk } from './booksOperations';

const initialStateBooks = {
	books: {		
		goingToRead: [],
		currentlyReading: [],
		finishedReading: [],
	},
	status: STATUS.idle,
	backupUserName: '',
};

export const booksSlice = createSlice({
	name: 'books',
	initialState: initialStateBooks,
	reducers: {
		resetCurrentlyReading: state=> {state.books.currentlyReading = []}
	},
	extraReducers: {
		[getUserBooksThunk.fulfilled]: (state, { payload }) => {
			state.books.goingToRead = payload.goingToRead;
			state.books.finishedReading = payload.finishedReading;
			state.status = STATUS.fulfilled;
			state.backupUserName = payload.name;
		},
		[getUserBooksThunk.pending]: state => {
			state.status = STATUS.pending
		},
		[getCurrentPlanning.pending]: state => {
			state.status = STATUS.pending
		},
		[getCurrentPlanning.fulfilled]: (state, { payload }) => {
			state.books.currentlyReading = payload.planning.books;
			state.status = STATUS.fulfilled
		},
		[getUserBooksThunk.rejected]: state => {
			state.status = STATUS.rejected
		},

		[addUserBookThunk.fulfilled]: (state, { payload }) => {
			state.books.goingToRead = [payload.newBook, ...state.books.goingToRead];
		},
		[addBookReview.pending]:state => {
			state.status = STATUS.pending
		},
		[addBookReview.fulfilled]: (state, { payload }) => {
			state.status = STATUS.fulfilled
			state.books.finishedReading = state.books.finishedReading.map(
				book => book._id === payload._id ? payload : book)
		}
			
		
	},
});
export const {resetCurrentlyReading} = booksSlice.actions