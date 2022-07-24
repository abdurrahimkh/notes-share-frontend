import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const register = createAsyncThunk("auth/register", async userData => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/users/register",
      userData
    );
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success("Registration Successful");
    }
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const login = createAsyncThunk("auth/login", async userData => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/users/login",
      userData
    );
    console.log(res)  
    if (res.data) {
      if (res.data.error) {
        toast.error(res.data.error);
        return null;
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success("Login Successfull");
        return res.data;
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const forgetPassword = createAsyncThunk("auth/forgetpassword", async data => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/users/forgetpassword",
      data
    );
    if (res.data) {
      if (res.data.error) {
        toast.error(res.data.error);
        return res.data;
      } else {
        toast.success(res.data.message);
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const newPassoword = createAsyncThunk("auth/newpassword", async data => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/users/newpassword",
      data
    );
    if (res.data) {
      console.log(res.data)
      if (res.data.error) {
        toast.error(res.data.error);
        return res.data;
      } else {
        toast.success(res.data.message);
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const googleLogin = createAsyncThunk("auth/google", async tokenId => {
  try {
    const res = axios({
      method: "POST",
      url: "http://localhost:8000/api/users/google",
      data: { tokenId },
    });
    const result = await res;
    if (result.data) {
      if (result.data.error) {
        toast.error(result.data.error);
        return null;
      } else {
        localStorage.setItem("user", JSON.stringify(result.data));
        return result.data;
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const completeRegistration = createAsyncThunk(
  "auth/google/complete",
  async data => {
    try {
      const res = axios({
        method: "POST",
        url: "http://localhost:8000/api/users/google/complete",
        data,
      });
      const result = await res;
      console.log(result);
      if (result.data) {
        if (result.data.error) {
          toast.error(result.data.error);
          return null;
        } else {
          localStorage.setItem("user", JSON.stringify(result.data));
          toast.success("Registration Complete");
          return result.data;
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
);

export const adminlogin = createAsyncThunk("auth/login", async userData => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/admin/login",
      userData
    );
    if (res.data) {
      if (res.data.error) {
        toast.error(res.data.error);
        return null;
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success("Login Successfull");
        return res.data;
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});
