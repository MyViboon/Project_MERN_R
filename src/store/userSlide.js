import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "pu 555",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.value = "PU login";
    },
    logout: (state) => {
      state.value = "Pu logout";
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { login, logout, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
