import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { completeRegistration } from "../../redux/features/auth/authAction";

const CompleteRegistration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = useSelector(state => state.auth.user._id);
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
    <div className="flex items-center min-h-[90vh] p-6 bg-gradient-to-b from-gray-50 to to-blue-200 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-md mx-auto  bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="p-6">
          <form onSubmit={handleSubmit(submitComplete)}>
            <h1 className="mb-4 whitespace-nowrap text-xl font-semibold text-gray-700 dark:text-gray-200 text-center ">
              Complete Registration
            </h1>

            <hr className="my-4 " />
            <label className="block mt-4 text-sm">
              <span className="text-gray-700 font-bold dark:text-gray-400">
                Username
              </span>
              <input
                className="border rounded p-2 block w-full mt-1 text-sm  dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="eg: elonmusk01"
                {...register("username", {
                  required: {
                    value: true,
                    message: "username is required",
                  },
                })}
              />
              {errors.username && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.username.message}
                </p>
              )}
            </label>
            <label className="block mt-4 text-sm">
              <span className="text-gray-700 font-bold dark:text-gray-400">
                Gender
              </span>
              <div className="flex ">
                <div className="xl:w-[25rem]">
                  <select
                    className="  w-full p-2  text-gray-700 bg-white border border-solid  rounded  focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none"
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
            <label className="block text-sm mt-4">
              <span className="text-gray-700 font-bold dark:text-gray-400">
                Institute
              </span>
              <input
                className="block border rounded p-2 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder="eg: University of Swabi"
                {...register("institute", {
                  required: {
                    value: true,
                    message: "institute is required",
                  },
                })}
              />
              {errors.institute && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.institute.message}
                </p>
              )}
            </label>
            <label className="block mt-4 text-sm">
              <span className="text-gray-700 font-bold dark:text-gray-400">
                Dicipline
              </span>
              <select
                className="  w-full p-2  text-gray-700 bg-white border border-solid  rounded  focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none"
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
            <label className="block mt-4 text-sm">
              <span className="text-gray-700  font-bold dark:text-gray-400">
                Field Of Study
              </span>
              <select
                className="  w-full p-2  text-gray-700 bg-white border border-solid  rounded  focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none"
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
              className="block mt-2 rounded w-full px-4 py-2  text-sm font-me dium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent disabled:bg-gray-400   active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
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
