import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
	user: { userId: string | number; token: string } | null;
	rememberMe: boolean;
	isAuthenticated: boolean;
}

const initialState: AuthState = {
	user: null,
	rememberMe: false,
	isAuthenticated: false,
};

const userSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser(
			state,
			action: PayloadAction<{ user: AuthState['user']; rememberMe: boolean }>,
		) {
			state.user = action.payload.user;
			state.rememberMe = action.payload.rememberMe;
			state.isAuthenticated = !!action.payload.user;
			if (action.payload.rememberMe) {
				localStorage.setItem('authState', JSON.stringify(state));
			} else {
				sessionStorage.setItem('authState', JSON.stringify(state));
			}
		},
		restoreUser(state) {
			const sessionData = sessionStorage.getItem('authState');
			const localData = localStorage.getItem('authState');

			if (sessionData) {
				const restoredState = JSON.parse(sessionData) as AuthState;
				return {
					...restoredState,
					isAuthenticated: !!restoredState.user,
				};
			} else if (localData) {
				const restoredState = JSON.parse(localData) as AuthState;
				return {
					...restoredState,
					isAuthenticated: !!restoredState.user,
				};
			}

			return state;
		},
		clearUser(state) {
			state.user = null;
			state.rememberMe = false;
			state.isAuthenticated = false;
			sessionStorage.removeItem('authState');
			localStorage.removeItem('authState');
		},
	},
});

export const { setUser, restoreUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
