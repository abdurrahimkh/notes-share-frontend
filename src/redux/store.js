import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import documentSlice from "./features/document/documentSlice";
import questionSlice from "./features/questions/questionSlice";
import { documentApi } from "./features/document/documentApi";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    documents: documentSlice,
    questions: questionSlice,
    [documentApi.reducerPath]: documentApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      documentApi.middleware
    ),
});
