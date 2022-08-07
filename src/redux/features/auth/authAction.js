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
      if (res.data.error) {
        toast.error(res.data.error);
        return null;
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        toast.success("Registration Successfull");
        return res.data;
      }
    }
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      toast.error("Username already exists");
    } else {
      toast.error(error.message);
    }
  }
});

export const login = createAsyncThunk("auth/login", async userData => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/users/login",
      userData
    );
    console.log(res);
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

export const forgetPassword = createAsyncThunk(
  "auth/forgetpassword",
  async data => {
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
  }
);

export const newPassoword = createAsyncThunk("auth/newpassword", async data => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/users/newpassword",
      data
    );
    if (res.data) {
      console.log(res.data);
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

export const googleLogin = createAsyncThunk("auth/google", async userInfo => {
  try {
    const res = axios({
      method: "POST",
      url: "http://localhost:8000/api/users/google",
      data: userInfo,
    });
    const result = await res;
    console.log(result);
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

export const updatePicture = createAsyncThunk(
  "user/update-pic",
  async (pic, { getState }) => {
    const _id = getState().auth.user._id;
    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", "fyp-project");
    data.append("cloud_name", "fypproject07");
    try {
      if (document) {
        const res = await axios({
          method: "post",
          url: "https://api.cloudinary.com/v1_1/fypproject07/image/upload",
          data,
        });
        const result = await res.data;
        const picURL = result.secure_url;
        console.log(picURL);
        if (picURL) {
          const res1 = await fetch(
            `http://localhost:8000/api/users/profile/picupdate/${_id}`,
            {
              method: "put",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                pic: picURL,
              }),
            }
          );
          const resp2 = await res1.json();
          console.log(resp2);
          if (resp2.pic) {
            toast.success("Update Successfull", {
              duration: 3000,
            });
            return resp2.pic;
          } else if (resp2.error) {
            toast.error(resp2.error);
          }
        }
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateInfo = createAsyncThunk(
  "user/update-profile",
  async (updateInfo, { getState }) => {
    const token = getState().auth.user.token;
    console.log(updateInfo);
    console.log(token);
    try {
      const res = await axios.put(
        "http://localhost:8000/api/users/profile/update",
        updateInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data) {
        console.log(res.data);
        toast.success("Update Sucessfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "user/update-password",
  async (updateInfo, { getState }) => {
    const token = getState().auth.user.token;
    console.log(updateInfo);
    console.log(token);
    try {
      const res = await axios.put(
        "http://localhost:8000/api/users/profile/passwordupdate",
        updateInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      if (res.data.message) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.error);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
);
