import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  register,
  googleLogin,
  completeRegistration,
  adminlogin,
} from "./authAction";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  isActive: user ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      localStorage.removeItem("user");
      state.isActive = false;
    },
  },
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isActive = true;
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
      if (action.payload !== null) {
        state.isActive = true;
      }
    },
    [login.rejected]: state => {
      state.isLoading = false;
      state.user = null;
    },
    [googleLogin.pending]: state => {
      state.isLoading = true;
    },
    [googleLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isActive = true;
      state.user = action.payload;
    },
    [googleLogin.rejected]: state => {
      state.isLoading = false;
      state.user = null;
    },
    [completeRegistration.pending]: state => {
      state.isLoading = true;
    },
    [completeRegistration.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isActive = true;
      state.user = action.payload;
    },
    [completeRegistration.rejected]: state => {
      state.isLoading = false;
      state.user = null;
    },
    [adminlogin.pending]: state => {
      state.isLoading = true;
    },
    [adminlogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      if (action.payload !== null) {
        state.isActive = true;
      }
    },
    [adminlogin.rejected]: state => {
      state.isLoading = false;
      state.user = null;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
