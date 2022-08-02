import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { getValues } from "../../redux/features/document/documentAction";
import { updateInfo } from "../../redux/features/auth/authAction";

const ProfileSettingsInput = ({ data }) => {
  const dispatch = useDispatch();
  const { register, formState, handleSubmit, control } = useForm({
    mode: "all",
  });
  const values = useSelector(state => state.documents.values);
  const universities = values[0]?.universities;
  const fieldofstudy = values[1]?.fieldofstudy;

  const submitChanges = data => {
    if (data.name.length > 0 || data.email.length > 0) {
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
  };
  useEffect(() => {
    dispatch(getValues());
  }, []);
  const dicipline = [
    { label: "Bachlor", value: "Bachlor" },
    { label: "Master", value: "Master" },
    { label: "Phd", value: "Phd" },
  ];
  const gender = [
    { label: "Male ", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  return (
    <form onSubmit={handleSubmit(submitChanges)}>
      <div className="flex ">
        <div className="pl-5 w-96">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Personal Information
          </h1>
          <label className="block text-sm">
            <span className="text-gray-700 dark:text-gray-400 font-bold">
              Name
            </span>
            <input
              className="input-update"
              placeholder={data?.user.name}
              {...register("name", {
                pattern: {
                  value: /^[a-zA-Z]/,
                  message: "Invalid Name",
                },
              })}
            />
            {formState.errors.name && (
              <p className="text-red-600 text-sm mt-2">
                {formState.errors.name.message}
              </p>
            )}
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">Email</span>
            <input
              className="input-update "
              placeholder={data?.user.email}
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  message: "invalid email",
                },
              })}
            />
            {formState.errors.email && (
              <p className="text-red-600 text-sm mt-2">
                {formState.errors.email.message}
              </p>
            )}
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400 font-bold">
              Gender
            </span>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select
                  options={gender}
                  placeholder={data?.user.gender}
                  {...field}
                />
              )}
            />
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400 font-bold">
              Username
            </span>
            <input
              className="input-update"
              placeholder={data?.user.username}
              {...register("username")}
            />
            {formState.errors.username && (
              <p className="text-red-600 text-sm mt-2">
                {formState.errors.username.message}
              </p>
            )}
          </label>
        </div>
        <div className="pl-5 mt-2 w-96">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Academic Information
          </h1>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400 font-bold">
              Institute
            </span>
            <Controller
              name="institute"
              control={control}
              render={({ field }) => (
                <CreatableSelect
                  options={universities}
                  placeholder={data?.user.institute}
                  {...field}
                />
              )}
            />
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400 font-bold">
              Dicipline
            </span>
            <Controller
              name="dicipline"
              control={control}
              render={({ field }) => (
                <Select
                  options={dicipline}
                  placeholder={data?.user.dicipline}
                  {...field}
                />
              )}
            />
          </label>
          <label className="block mt-4 text-sm ">
            <span className="text-gray-700 dark:text-gray-400 font-bold">
              Field Of Study
            </span>
            <Controller
              name="fieldofstudy"
              control={control}
              render={({ field }) => (
                <CreatableSelect
                  options={fieldofstudy}
                  placeholder={data?.user.fieldofstudy}
                  {...field}
                />
              )}
            />
          </label>
        </div>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="btn btn-success mt-5 ">
          <i className="bi bi-pencil-square mr-2"></i>
          Update
        </button>
      </div>
    </form>
  );
};

export default ProfileSettingsInput;
