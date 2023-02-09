import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchQuestions = createAsyncThunk('question/fetch-questions', async () => {
  try {
    const res = await axios.get('import.meta.env.VITE_REACT_API/api/questions');
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const addQuestion = createAsyncThunk('question/add-question', async (questionData, { getState }) => {
  const token = getState().auth.user.token;
  try {
    const res = await axios.post('import.meta.env.VITE_REACT_API/api/questions', questionData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.data) {
      toast.success(res.data.message);
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const deleteQuestion = createAsyncThunk('question/delete-question', async (questionData, { getState }) => {
  const { id } = questionData;
  const token = getState().auth.user.token;
  try {
    const res = await axios({
      method: 'delete',
      url: `import.meta.env.VITE_REACT_API/api/questions/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: questionData,
    });

    if (res.data) {
      toast.success('Delete success');
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const questionDetails = createAsyncThunk('question/question-details', async id => {
  try {
    const res = await axios.get(`import.meta.env.VITE_REACT_API/api/question/${id}`);
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const addAnswer = createAsyncThunk('question/add-answer', async (answerData, { getState }) => {
  const { id, answer, file } = answerData;
  const token = getState().auth.user.token;
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'fyp-project');
  data.append('cloud_name', 'fypproject07');

  if (file) {
    const res = await axios({
      method: 'post',
      url: 'https://api.cloudinary.com/v1_1/fypproject07/raw/upload',
      data,
    });
    const result = await res.data;
    const commentFileUrl = result.secure_url;
    if (commentFileUrl) {
      const response = await fetch('import.meta.env.VITE_REACT_API/api/answers', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id,
          text: answer,
          file: commentFileUrl,
        }),
      });
      const response2 = await response.json();
      if (response2) {
        toast.success('Answer Added');
        return response2;
      } else if (response2.error) {
        toast.error(response2.error);
      }
    }
  } else if (!file) {
    const response = await fetch('import.meta.env.VITE_REACT_API/api/answers', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id,
        text: answer,
      }),
    });
    const response2 = await response.json();
    if (response2) {
      toast.success('Answer Added');
      return response2;
    } else if (response2.error) {
      toast.error(response2.error);
    }
  }
});

export const deleteAnswer = createAsyncThunk('question/delete-answer', async (answerData, { getState }) => {
  const token = getState().auth.user.token;
  try {
    const res = await axios({
      method: 'delete',
      url: 'import.meta.env.VITE_REACT_API/api/answers',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: answerData,
    });

    if (res.data) {
      toast.success('Answer Deleted');
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
});
