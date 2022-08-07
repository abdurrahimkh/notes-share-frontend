import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { completeRegistration } from "../../redux/features/auth/authAction";

const CompleteRegistration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = useSelector(state => state.auth.user?._id);
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  const submitComplete = data => {
    const { dicipline, fieldofstudy, gender, institute, username } = data;
    dispatch(
      completeRegistration({
        _id,
        dicipline,
        fieldofstudy,
        gender,
        institute,
        username,
      })
    ).then(res => res.payload && navigate("/"));
  };
  return (
    <div className="flex min-h-[90vh] items-center p-6  dark:bg-gray-900">
      <div className="mx-auto h-full max-w-md flex-1  rounded-lg bg-white shadow-xl dark:bg-gray-800">
        <div className="p-6">
          <form onSubmit={handleSubmit(submitComplete)}>
            <h1 className="mb-4 whitespace-nowrap text-center text-xl font-semibold text-gray-700 dark:text-gray-200 ">
              Complete Registration
            </h1>

            <hr className="my-4 " />
            <label className="mt-4 block text-sm">
              <span className="font-bold text-gray-700 dark:text-gray-400">
                Username
              </span>
              <input
                className="focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input mt-1 block w-full rounded  border p-2 text-sm focus:border-purple-400 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
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
            <label className="mt-4 block text-sm">
              <span className="font-bold text-gray-700 dark:text-gray-400">
                Gender
              </span>
              <div className="flex ">
                <div className="xl:w-[25rem]">
                  <select
                    className="  w-full rounded  border border-solid bg-white p-2  text-gray-700  focus:border-purple-400 focus:bg-white focus:text-gray-700 focus:outline-none"
                    aria-label="Select Gender"
                    {...register("gender")}
                  >
                    <option value="male" defaultValue>
                      Male
                    </option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </label>
            <label className="mt-4 block text-sm">
              <span className="font-bold text-gray-700 dark:text-gray-400">
                Institute
              </span>
              <input
                className="focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input mt-1 block w-full rounded border p-2 text-sm focus:border-purple-400 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                placeholder="eg: University of Swabi"
                {...register("institute", {
                  required: {
                    value: true,
                    message: "institute is required",
                  },
                })}
              />
              {errors.institute && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.institute.message}
                </p>
              )}
            </label>
            <label className="mt-4 block text-sm">
              <span className="font-bold text-gray-700 dark:text-gray-400">
                Dicipline
              </span>
              <select
                className="  w-full rounded  border border-solid bg-white p-2  text-gray-700  focus:border-purple-400 focus:bg-white focus:text-gray-700 focus:outline-none"
                aria-label="Select Dicipline"
                {...register("dicipline", {
                  required: {
                    value: true,
                    message: "dicipline is required",
                  },
                })}
              >
                <option value="bs" defaultValue>
                  Bachlor
                </option>
                <option value="ms">Master</option>
                <option value="phd">PhD</option>
              </select>
            </label>
            <label className="mt-4 block text-sm">
              <span className="font-bold  text-gray-700 dark:text-gray-400">
                Field Of Study
              </span>
              <select
                className="  w-full rounded  border border-solid bg-white p-2  text-gray-700  focus:border-purple-400 focus:bg-white focus:text-gray-700 focus:outline-none"
                aria-label="Select Field"
                {...register("fieldofstudy", {
                  required: {
                    value: true,
                    message: "field of study is required",
                  },
                })}
              >
                <option value="Agronomy" defaultValue>
                  Agronomy
                </option>
                <option value="Architecture">Architecture</option>
                <option value="Biology">Biology</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Computerscience">Computer science</option>
                <option value="Economics">Economics</option>
                <option value="EducationandPedagogy">
                  Education and Pedagogy
                </option>
                <option value="Engineering">Engineering</option>
                <option value="History">History</option>
                <option value="Philosophy">Philosophy</option>
              </select>
            </label>
            <button
              className="font-me dium focus:shadow-outline-purple mt-2 block w-full  rounded border border-transparent bg-blue-600 px-4 py-2 text-center text-sm leading-5 text-white transition-colors duration-150   hover:bg-blue-700 focus:outline-none active:bg-blue-600 disabled:bg-gray-400"
              type="submit"
              disabled={!isValid}
            >
              Complete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompleteRegistration;
