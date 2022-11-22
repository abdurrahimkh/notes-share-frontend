import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { completeRegistration } from "../../redux/features/auth/authAction";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import {
  addFieldOfStudy,
  addUniversity,
  getFields,
  getUniversities,
} from "../../redux/features/document/documentAction";
import { motion } from "framer-motion";
import { useEffect } from "react";

const CompleteRegistration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = useSelector(state => state.auth.user?._id);
  const { fields: fieldofstudy, universities } = useSelector(
    state => state.documents
  );

  const dicipline = [
    { label: "Bachlor", value: "Bachlor" },
    { label: "Master", value: "Master" },
    { label: "Phd", value: "Phd" },
  ];
  const gender = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  const {
    register,
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  const submitComplete = data => {
    if (data.institute.__isNew__) {
      dispatch(
        addUniversity({
          university: data.institute.value,
        })
      );
    }
    if (data.fieldofstudy.__isNew__) {
      dispatch(
        addFieldOfStudy({
          field: data.fieldofstudy.value,
        })
      );
    }
    dispatch(
      completeRegistration({
        _id,
        dicipline: data.dicipline.value,
        fieldofstudy: data.fieldofstudy.value,
        gender: data.gender.value,
        institute: data.institute.value,
        username: data.username,
      })
    ).then(res => res.payload && navigate("/"));
  };

  useEffect(() => {
    dispatch(getFields());
    dispatch(getUniversities());
  }, []);
  return (
    <motion.div
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      className="flex min-h-[90vh] items-center overflow-y-clip p-6 "
    >
      <div className="mx-auto h-full max-w-md flex-1  rounded-lg bg-white shadow-xl">
        <div className="p-6">
          <form onSubmit={handleSubmit(submitComplete)}>
            <h1 className="mb-4 whitespace-nowrap text-center text-xl font-semibold text-gray-700 ">
              Complete Registration
            </h1>

            <hr className="my-4 " />

            <label className="mt-4 block text-sm">
              <span className="text-gray-700 ">Gender</span>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => <Select options={gender} {...field} />}
              />
            </label>
            <label className="block text-sm">
              <label className="mt-4 block text-sm">
                <span className="text-gray-700 ">Institute</span>
                <Controller
                  className="z-10"
                  name="institute"
                  control={control}
                  render={({ field }) => (
                    <CreatableSelect options={universities} {...field} />
                  )}
                />
              </label>
            </label>
            <label className="mt-4 block text-sm">
              <span className="text-gray-700 ">Dicipline</span>

              <Controller
                name="dicipline"
                control={control}
                render={({ field }) => (
                  <CreatableSelect options={dicipline} {...field} />
                )}
              />
            </label>
            <label className="mt-4 block text-sm">
              <span className="text-gray-700 ">Field Of Study</span>
              <Controller
                name="fieldofstudy"
                control={control}
                render={({ field }) => (
                  <CreatableSelect options={fieldofstudy} {...field} />
                )}
              />
            </label>
            <label className="mt-4 block text-sm">
              <span className=" text-gray-700 ">Username</span>
              <input
                className="input-update"
                placeholder="eg: elonmusk01"
                {...register("username", {
                  required: {
                    value: true,
                    message: "username is required",
                  },
                })}
              />
              {errors.username && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.username.message}
                </p>
              )}
            </label>
            <button
              className="font-me dium focus:shadow-outline-blue mt-2 block w-full  rounded border border-transparent bg-blue-600 px-4 py-2 text-center text-sm leading-5 text-white transition-colors duration-150   hover:bg-blue-700 focus:outline-none active:bg-blue-600 disabled:bg-gray-400"
              type="submit"
              disabled={!isValid}
            >
              Complete
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default CompleteRegistration;
