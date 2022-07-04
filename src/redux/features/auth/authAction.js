import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const register = createAsyncThunk("auth/register", async userData => {
  console.log(userData);
  try {
    const res = await axios.post(
      "http://localhost:8000/api/users/register",
      userData
    );
    console.log(res.data);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success("Registration Successful");
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const login = createAsyncThunk("auth/login", async userData => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/users/login",
      userData
    );
    console.log(res.data);
    if (res.data) {
      if (res.data.error) {
        toast.error(res.data.error);
        return null;
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      }
    }
  } catch (error) {
    console.log(error);
  }
});
