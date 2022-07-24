import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import { newPassoword } from "../../redux/features/auth/authAction";

const NewPassword = () => {
const {token} = useParams()
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitPassword = data => {
    dispatch(newPassoword({password:data.password,token})).then(
      res =>  navigate("/user/login") 
    );
  };
  return (
    <div className="flex items-center min-h-[90vh] p-6 bg-gradient-to-b from-gray-50 to to-blue-200 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="p-6">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Reset Password
          </h1>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">Enter New Password</span>
            <input
              className="border rounded p-2 block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              placeholder="***************"
              type="password"
              {...register("password", {
                required: "You must specify a password",
                minLength: {
                  value: 6,
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </label>

          <button
            disabled={!isValid}
            className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple disabled:bg-gray-500 hover:cursor-pointer"
            onClick={handleSubmit(submitPassword)}
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
