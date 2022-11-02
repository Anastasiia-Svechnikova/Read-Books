import API from 'Services/Api/Api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { normalizeDate } from 'components/Statistics/functions/functions';

const { postPlanning, patchPlanning, getPlanning } = API;

export const startPlanning = createAsyncThunk(
	'planning/startPlanning',
	async (PlanningObject, thunkAPI) => {
		try {
			const data = await postPlanning(PlanningObject);
			return data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const deletePlanningBook = createAsyncThunk(
	'planning/deletePlanningBook',
	async (idToDelete, thunkAPI) => {
		try {
		const state = thunkAPI.getState()
		const startDate = normalizeDate(Date.now())
		const endDate = state.planning.endDate;
		const books = state.planning.books.filter(({ _id }) => _id !== idToDelete).map(({_id})=> _id)
		
		const data = await postPlanning({ startDate, endDate, books});
			return data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const addReadingPage = createAsyncThunk(
	'planning/addReadingPage',

	async ({ pages }, thunkAPI) => {
		try {
			const data = patchPlanning({ pages });
			return data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const getCurrentPlanning = createAsyncThunk(
	'planning/getCurrentPlanning',
	async (_, thunkAPI) => {
		try {
			const data = await getPlanning();
			return data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
