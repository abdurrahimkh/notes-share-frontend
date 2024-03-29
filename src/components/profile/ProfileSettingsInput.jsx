import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import {
  dicipline,
  gender,
  updateProfileInfo,
} from "../../helpers/UpdateProfile";
import ProfilePasswordChange from "./ProfilePasswordChange";
import { useEffect } from "react";
import {
  getFields,
  getUniversities,
} from "../../redux/features/document/documentAction";

const ProfileSettingsInput = ({ data }) => {
  const dispatch = useDispatch();
  const isInfoLoading = useSelector(state => state.auth.isInfoLoading);
  const { register, formState, handleSubmit, control, reset } = useForm({
    mode: "all",
  });
  const { fields: fieldofstudy, universities } = useSelector(
    state => state.documents
  );

  const submitChanges = data => {
    updateProfileInfo(data, dispatch);
  };
  useEffect(() => {
    dispatch(getFields());
    dispatch(getUniversities());
  }, []);
  return (
    <form onSubmit={handleSubmit(submitChanges)}>
      <div className="mt-4 rounded-md border md:mt-0">
        <div className="flex flex-col gap-1 md:flex-row ">
          <div className="p-1 md:w-96 md:p-5 ">
            <h1 className="mb-4 text-xl font-light tracking-widest  text-gray-700 ">
              Personal Information
            </h1>
            <label className="block text-sm">
              <span className="font-bold text-gray-700 ">Name</span>
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
                <p className="mt-2 text-sm text-red-600">
                  {formState.errors.name.message}
                </p>
              )}
            </label>
            <label className="mt-4 block text-sm">
              <span className="text-gray-700 ">Email</span>
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
                <p className="mt-2 text-sm text-red-600">
                  {formState.errors.email.message}
                </p>
              )}
            </label>
            <label className="mt-4 block text-sm">
              <span className="font-bold text-gray-700 ">Gender</span>
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
            <label className="mt-4 block text-sm">
              <span className="font-bold text-gray-700 ">Username</span>
              <input
                className="input-update"
                placeholder={data?.user.username}
                {...register("username")}
              />
              {formState.errors.username && (
                <p className="mt-2 text-sm text-red-600">
                  {formState.errors.username.message}
                </p>
              )}
            </label>
          </div>
          <div className="mt-4 p-1 md:mt-0  md:w-96 md:p-5">
            <h1 className="mb-4 text-xl font-light tracking-widest  text-gray-700 ">
              Academic Information
            </h1>
            <label className="mt-4 block text-sm">
              <span className="font-bold text-gray-700 ">Institute</span>
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
            <label className="mt-4 block text-sm">
              <span className="font-bold text-gray-700 ">Dicipline</span>
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
            <label className="mt-4 block text-sm ">
              <span className="font-bold text-gray-700 ">Field Of Study</span>
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
        <div className="p-2">
          <button
            onClick={submitChanges}
            className="btn btn-sm mt-2 flex gap-2 border-none bg-blue-600 px-6 text-white hover:bg-blue-700  "
          >
            {isInfoLoading ? (
              <i className="bi bi-arrow-clockwise animate-spin"></i>
            ) : (
              <i className="bi bi-pencil-square mr-2"></i>
            )}
            Update
          </button>
        </div>
      </div>
      <ProfilePasswordChange
        register={register}
        formState={formState}
        handleSubmit={handleSubmit}
        reset={reset}
      />
    </form>
  );
};

export default ProfileSettingsInput;
