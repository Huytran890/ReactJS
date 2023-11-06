import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

type UserStateValue = {
  userName: string;
};
export type UserState = {
  value: UserStateValue;
};
const initialState = {
  value: { userName: "" },
} as UserState;
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<UserStateValue>) => {
      state.value = action.payload;
    }, // ! note lưu ý (tạo ra 1 action) => { type: 'user'/login }
    logout: (state: UserState) => {
      state.value = initialState.value;
    },
  },
});
export const { login, logout } = userSlice.actions;
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

store.subscribe(() => {
  console.log("<<=== state vua update ===>>");
});

export type RootState = ReturnType<typeof store.getState>;
