import { updateInfo, updatePassword } from "../redux/features/auth/authAction";

export const dicipline = [
  { label: "Bachlor", value: "Bachlor" },
  { label: "Master", value: "Master" },
  { label: "Phd", value: "Phd" },
];
export const gender = [
  { label: "Male ", value: "Male" },
  { label: "Female", value: "Female" },
];

export const updateProfileInfo = (data, dispatch) => {
  if (data.name.length > 0) {
    dispatch(updateInfo({ name: data.name }));
  }
  if (data.email.length > 0) {
    dispatch(updateInfo({ email: data.email }));
  }
  if (data.username.length > 0) {
    dispatch(updateInfo({ username: data.username }));
  }
  if (data.gender) {
    dispatch(updateInfo({ gender: data.gender.value }));
  }
  if (data.fieldofstudy) {
    dispatch(updateInfo({ fieldofstudy: data.fieldofstudy.value }));
  }
  if (data.institute) {
    dispatch(updateInfo({ institute: data.institute.value }));
  }
  if (data.dicipline) {
    dispatch(updateInfo({ dicipline: data.dicipline.value }));
  }
  if (data.currentpassword && data.updatepassword) {
    dispatch(
      updatePassword({
        currentpassword: data.currentpassword,
        updatepassword: data.updatepassword,
      })
    );
  }
};
