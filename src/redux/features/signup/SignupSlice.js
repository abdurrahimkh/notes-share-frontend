import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
  gender: "",
  institue: "",
  dicipline: "",
  fieldofstudy: "",
};

const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    chooseName: (state, action) => {
      state.name = action.payload;
    },
    chooseUsername: (state, action) => {
      state.username = action.payload;
    },
    chooseGender: (state, action) => {
      state.gender = action.payload;
    },
    chooseEmail: (state, action) => {
      state.email = action.payload;
    },
    choosePassword: (state, action) => {
      state.password = action.payload;
    },
    chooseInstitue: (state, action) => {
      state.institue = action.payload;
    },
    chooseDicipline: (state, action) => {
      state.dicipline = action.payload;
    },
    chooseFos: (state, action) => {
      state.fieldofstudy = action.payload;
    },
  },
});

export const {
  chooseName,
  chooseEmail,
  choosePassword,
  chooseUsername,
  chooseDicipline,
  chooseFos,
  chooseInstitue,
  chooseGender,
} = SignupSlice.actions;

export default SignupSlice.reducer;
