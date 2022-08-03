import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  register,
  googleLogin,
  completeRegistration,
  adminlogin,
  newPassoword,
  forgetPassword,
  updatePicture,
  updateInfo,
  updatePassword,
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
    [forgetPassword.pending]: state => {
      state.isLoading = true;
    },
    [forgetPassword.fulfilled]: state => {
      state.isLoading = false;
    },
    [forgetPassword.rejected]: state => {
      state.isLoading = false;
    },
    [newPassoword.pending]: state => {
      state.isLoading = true;
    },
    [newPassoword.fulfilled]: state => {
      state.isLoading = false;
    },
    [newPassoword.rejected]: state => {
      state.isLoading = false;
    },
    [updatePicture.pending]: state => {
      state.isLoading = true;
    },
    [updatePicture.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user.pic = action.payload;
    },
    [updatePicture.rejected]: state => {
      state.isLoading = false;
    },
    [updateInfo.pending]: state => {
      state.isInfoLoading = true;
    },
    [updateInfo.fulfilled]: state => {
      state.isInfoLoading = false;
    },
    [updateInfo.rejected]: state => {
      state.isInfoLoading = false;
    },
    [updatePassword.pending]: state => {
      state.isPasswordLoading = true;
    },
    [updatePassword.fulfilled]: state => {
      state.isPasswordLoading = false;
    },
    [updatePassword.rejected]: state => {
      state.isPasswordLoading = false;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
