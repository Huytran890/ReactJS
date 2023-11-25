import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface CounterState {
	value: number;
}

// define initial values
const initialState: CounterState = {
	value: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
	// Để định nghĩa async function
	extraReducers: (builder) => {
		builder
			// Pending state
			.addCase(incrementAsync.pending, () => {
				console.log('incrementAsync.pending');
			})
			// Success state
			.addCase(
				incrementAsync.fulfilled,
				(state, action: PayloadAction<number>) => {
					state.value += action.payload;
				}
			);
	},
});

//! Đối với async function thì phải define name chứ ko tự động tạo như action bth
//! tạo action async
//! Đối số 1 là name, đối số 2 là actual function
export const incrementAsync = createAsyncThunk(
	'counter/incrementAsync',
	async (amount: number) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return amount;
	}
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
