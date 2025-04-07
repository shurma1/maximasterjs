import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {apiService} from '@/services/apiService.ts';

const rootReducer = combineReducers({
	[apiService.reducerPath]: apiService.reducer,
});

const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
