import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const fetchQuestions = createAsyncThunk(
  "question/fetch-questions",
  async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/questions");
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
);

export const addQuestion = createAsyncThunk(
  "question/add-question",
  async (questionData, { getState }) => {
    console.log(questionData);
    const token = getState().auth.user.token;
    try {
      const res = await axios.post(
        "http://localhost:8000/api/questions",
        questionData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data) {
        toast.success(res.data.message);
        return res.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
