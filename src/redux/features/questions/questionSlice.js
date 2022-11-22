import { createSlice } from "@reduxjs/toolkit";
import {
  addAnswer,
  addQuestion,
  deleteAnswer,
  deleteQuestion,
  fetchQuestions,
  questionDetails,
} from "./questionAction";

const initialState = {
  questions: [],
  eachQuestion: {},
  isLoading: false,
  answerPostLoading: false,
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
    [deleteQuestion.pending]: state => {
      state.isLoading = true;
    },
    [deleteQuestion.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.questions = action.payload;
    },
    [deleteQuestion.rejected]: state => {
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
    [addAnswer.pending]: state => {
      state.answerPostLoading = true;
    },
    [addAnswer.fulfilled]: (state, action) => {
      state.answerPostLoading = false;
      state.eachQuestion = action.payload;
    },
    [addAnswer.rejected]: state => {
      state.answerPostLoading = false;
    },
    [deleteAnswer.pending]: state => {
      state.isDeleteLoading = true;
    },
    [deleteAnswer.fulfilled]: (state, action) => {
      state.isDeleteLoading = false;
      state.eachQuestion = action.payload;
    },
    [deleteAnswer.rejected]: state => {
      state.isDeleteLoading = false;
    },
  },
});

export const {} = documentSlice.actions;

export default documentSlice.reducer;
