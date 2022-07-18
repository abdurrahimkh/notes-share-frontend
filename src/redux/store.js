import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import documentSlice from "./features/document/documentSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    documents: documentSlice,
  },
});
