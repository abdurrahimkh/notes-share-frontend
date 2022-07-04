import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import SignupSlice from "./features/signup/SignupSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    signup: SignupSlice,
  },
});
