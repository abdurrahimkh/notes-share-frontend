import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const register = createAsyncThunk('auth/register', async userData => {
  try {
    const res = await axios.post('import.meta.env.VITE_REACT_API/api/users/register', userData);
    if (res.data) {
      if (res.data.error) {
        toast.error(res.data.error);
        return null;
      } else {
        localStorage.setItem('user', JSON.stringify(res.data));
        toast.success('Registration Successfull');
        return res.data;
      }
    }
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      toast.error('Username already exists');
    } else {
      toast.error(error.message);
    }
  }
});

export const login = createAsyncThunk('auth/login', async userData => {
  try {
    const res = await axios.post('import.meta.env.VITE_REACT_API/api/users/login', userData);
    if (res.data) {
      if (res.data.error) {
        toast.error(res.data.error);
        return null;
      } else {
        localStorage.setItem('user', JSON.stringify(res.data));
        toast.success('Login Successfull');
        return res.data;
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const forgetPassword = createAsyncThunk('auth/forgetpassword', async data => {
  try {
    const res = await axios.post('import.meta.env.VITE_REACT_API/api/users/forgetpassword', data);
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

export const newPassoword = createAsyncThunk('auth/newpassword', async data => {
  try {
    const res = await axios.post('import.meta.env.VITE_REACT_API/api/users/newpassword', data);
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

export const googleLogin = createAsyncThunk('auth/google', async userInfo => {
  try {
    const res = axios({
      method: 'POST',
      url: 'import.meta.env.VITE_REACT_API/api/users/google',
      data: userInfo,
    });
    const result = await res;
    console.log(result);
    if (result.data) {
      if (result.data.error) {
        toast.error(result.data.error);
        return null;
      } else {
        localStorage.setItem('user', JSON.stringify(result.data));
        return result.data;
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const completeRegistration = createAsyncThunk('auth/google/complete', async data => {
  console.log(data);
  try {
    const res = axios({
      method: 'POST',
      url: 'import.meta.env.VITE_REACT_API/api/users/google/complete',
      data,
    });
    const result = await res;
    console.log(result);
    if (result.data) {
      if (result.data.error) {
        toast.error(result.data.error);
        return null;
      } else {
        localStorage.setItem('user', JSON.stringify(result.data));
        toast.success('Registration Complete');
        return result.data;
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const adminlogin = createAsyncThunk('auth/login', async userData => {
  try {
    const res = await axios.post('import.meta.env.VITE_REACT_API/api/admin/login', userData);
    if (res.data) {
      if (res.data.error) {
        toast.error(res.data.error);
        return null;
      } else {
        localStorage.setItem('user', JSON.stringify(res.data));
        toast.success('Login Successfull');
        return res.data;
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const adminEmailUpdate = createAsyncThunk('admin/update-email', async updateInfo => {
  try {
    const res = await axios.put('import.meta.env.VITE_REACT_API/api/admin/profile/email', updateInfo);
    if (res.data.message) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.error);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const adminPasswordUpdate = createAsyncThunk('admin/update-password', async updateInfo => {
  try {
    const res = await axios.put('import.meta.env.VITE_REACT_API/api/admin/profile/password', updateInfo);
    if (res.data.message) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.error);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const updatePicture = createAsyncThunk('user/update-pic', async (pic, { getState }) => {
  const _id = getState().auth.user._id;
  const data = new FormData();
  data.append('file', pic);
  data.append('upload_preset', 'fyp-project');
  data.append('cloud_name', 'fypproject07');
  try {
    if (document) {
      const res = await axios({
        method: 'post',
        url: 'https://api.cloudinary.com/v1_1/fypproject07/image/upload',
        data,
      });
      const result = await res.data;
      const picURL = result.secure_url;
      if (picURL) {
        const res1 = await fetch(`import.meta.env.VITE_REACT_API/api/users/profile/picupdate/${_id}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pic: picURL,
          }),
        });
        const resp2 = await res1.json();
        if (resp2.pic) {
          toast.success('Update Successfull', {
            duration: 3000,
          });
          return resp2.pic;
        } else if (resp2.error) {
          toast.error(resp2.error);
        }
      }
    } else {
      toast.error('Error');
    }
  } catch (error) {
    console.log(error);
  }
});

export const updateInfo = createAsyncThunk('user/update-profile', async (updateInfo, { getState }) => {
  const token = getState().auth.user.token;
  try {
    const res = await axios.put('import.meta.env.VITE_REACT_API/api/users/profile/update', updateInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data) {
      toast.success('Update Sucessfully');
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const updatePassword = createAsyncThunk('user/update-password', async (updateInfo, { getState }) => {
  const token = getState().auth.user.token;
  try {
    const res = await axios.put('import.meta.env.VITE_REACT_API/api/users/profile/passwordupdate', updateInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.message) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.error);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});

export const contactUs = createAsyncThunk('user/contact-us', async info => {
  try {
    const res = await axios.post('import.meta.env.VITE_REACT_API/api/users/contact-us', info);
    if (res.data.message) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.error);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
});
