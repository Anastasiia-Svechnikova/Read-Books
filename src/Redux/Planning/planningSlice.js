import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import persistReducer from 'redux-persist/es/persistReducer';

import {
	startPlanning,
	getCurrentPlanning,
	addReadingPage,
	deletePlanningBook,
} from '../Planning/planningOperations';

const initialState = {
	isPlanningActive:false,
	books: [],
	startDate: '',
	endDate: '',
	pagesPerDay: null,
	duration: null,
	stats: [],
	isShowResults: false,
	planFact: [],
	isLoading: false,
	errorMessage: false,
	pagesReaded: null,
};

const planningSlice = createSlice({
	name: 'planning',
	initialState,
	reducers: {
		showResults(state, { payload }) {
			state.isShowResults = payload;
		},
		addPlanFact(state, { payload }) {
			state.planFact = payload;
		},
		resetPagesAndPlan(state) {
			state.planFact = [];
			state.isShowResults = false;
			state.isPlanningActive = false;
			state.duration = null;
			state.pagesPerDay = null
			state.books = [];
		},
	},
	extraReducers: {
		[startPlanning.fulfilled](state, { payload }) {
			state.isPlanningActive = true;
			state.books = payload.books;
			state.startDate = payload.startDate;
			state.endDate = payload.endDate;
			state.pagesPerDay = payload.pagesPerDay;
			state.duration = payload.duration;
			state.stats = payload.stats;
		},

		[startPlanning.pending](state) {
			state.isLoading = true;
		},
		[startPlanning.rejected](state) {
			state.isLoading = false;
			state.errorMessage = true;
		},
		[deletePlanningBook.pending]:state=> {
			state.isLoading = true;
		},
		[deletePlanningBook.fulfilled]:(state, {payload})=> {
			state.isLoading = false;
			state.books = payload.books;
		},

		[addReadingPage.pending](state) {
			state.isLoading = true;
		},
		[addReadingPage.fulfilled](state, { payload }) {
			state.isLoading = false;
			state.stats = payload.planning.stats;
			state.pagesReaded = payload.book.pagesFinished;
		},
		[addReadingPage.rejected](state) {
			state.isLoading = false;
		},

		[getCurrentPlanning.fulfilled](state, { payload }) {
			state.books = payload.planning.books;
			state.startDate = payload.planning.startDate;
			state.endDate = payload.planning.endDate;
			state.pagesPerDay = payload.planning.pagesPerDay;
			state.duration = payload.planning.duration;
			state.stats = payload.planning.stats;
			state.isShowResults = state.planFact.length > 0 ? true : false;
			state.isLoading = false;
		},
		[getCurrentPlanning.pending](state) {
			state.isLoading = true;
		},
		[getCurrentPlanning.rejected](state) {
			state.isLoading = false;
			state.duration = null
			state.stats = []
		},
	},
});

export const planningReducer = planningSlice.reducer;
export const {
	resetPagesAndPlan,
	showResults,
	addPlanFact,
} = planningSlice.actions;

const planningPersistConfig = {
	key: 'planning',
	storage,
	whitelist: ['planFact','isPlanningActive'],
};

export const persistedPlanningReducer = persistReducer(
	planningPersistConfig,
	planningReducer
);
