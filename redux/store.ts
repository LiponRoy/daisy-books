// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { bookApi } from './feature/bookApi';

const store = configureStore({
	reducer: {
		[bookApi.reducerPath]: bookApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(bookApi.middleware),
});

export default store;
