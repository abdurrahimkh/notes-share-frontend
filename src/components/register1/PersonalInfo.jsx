import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  chooseGender,
  chooseName,
  chooseUsername,
} from "../../redux/features/signup/SignupSlice";

const PersonalInfo = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const name = useSelector(state => state.name);
  // const username = useSelector(state => state.username);
  // const gender = useSelector(state => state.gender);
  // const { register, handleSubmit } = useForm({
  //   defaultValues: { name, username, gender },
  // });
  // const onSubmit = data => {
  //   dispatch(chooseName(data.name));
  //   dispatch(chooseUsername(data.username));
  //   dispatch(chooseGender(data.gender));
  //   navigate("/Step3");
  // };
  return (
    // <div className="flex items-center min-h-[90vh] p-6 bg-gradient-to-b from-gray-50 to to-blue-200 dark:bg-gray-900">
    <div className="flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form>
        <div className="p-6">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Personal Info
          </h1>
          <label className="block text-sm">
            <span className="text-gray-700 dark:text-gray-400">Name</span>
            <input
              className="block border rounded p-2 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray"
              placeholder="eg: Elon Musk"
              // {...register("name")}
            />
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">Gender</span>
            <div className="flex ">
              <div className="xl:w-[25rem]">
                <select
                  // {...register("gender")}
                  className="  w-full p-2  text-gray-700 bg-white border border-solid  rounded  focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none"
                  aria-label="Select Gender"
                >
                  <option value="male" defaultValue>
                    Male
                  </option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">Username</span>
            <input
              className="border rounded p-2 block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              placeholder="eg: elonmusk01"
              // {...register("username")}
            />
          </label>
          <div className="flex justify-center space-x-3">
            <button
              onClick={() => navigate("/user/register")}
              className="  px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
            >
              Prev
            </button>
            <button className="  px-4 py-2 mt-4  text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-purple">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default PersonalInfo;
