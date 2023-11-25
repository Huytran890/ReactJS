import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

//! Tạo store
export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

// giống như useSelector để lấy giá trị
export type RootState = ReturnType<typeof store.getState>;
// giống như useDispatch để lấy action
export type AppDispatch = typeof store.dispatch;
