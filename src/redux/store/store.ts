// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';

import authReducer, { restoreUser } from './userSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

store.dispatch(restoreUser());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
