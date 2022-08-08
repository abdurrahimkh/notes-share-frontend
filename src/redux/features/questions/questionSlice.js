import { createSlice } from "@reduxjs/toolkit";
import { addQuestion, fetchQuestions, questionDetails } from "./questionAction";

const initialState = {
  questions: [],
  eachQuestion: {},
  isLoading: false,
};

const documentSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchQuestions.pending]: state => {
      state.isLoading = true;
    },
    [fetchQuestions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.questions = action.payload;
    },
    [fetchQuestions.rejected]: state => {
      state.isLoading = false;
    },
    [addQuestion.pending]: state => {
      state.isLoading = true;
    },
    [addQuestion.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addQuestion.rejected]: state => {
      state.isLoading = false;
    },
    [questionDetails.pending]: state => {
      state.isLoading = true;
    },
    [questionDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.eachQuestion = action.payload;
    },
    [questionDetails.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const {} = documentSlice.actions;

export default documentSlice.reducer;
