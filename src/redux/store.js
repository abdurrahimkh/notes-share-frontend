import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import documentSlice from "./features/document/documentSlice";
import { documentApi } from "./features/document/documentApi";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    documents: documentSlice,
    [documentApi.reducerPath]: documentApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(documentApi.middleware),
});
