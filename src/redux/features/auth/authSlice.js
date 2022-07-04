import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authAction";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      console.log("Logout Cliked");
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [register.rejected]: state => {
      state.isLoading = false;
      state.user = null;
    },
    [login.pending]: state => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [login.rejected]: state => {
      state.isLoading = false;
      state.user = null;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
