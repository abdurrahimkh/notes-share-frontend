import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../redux/features/auth/authAction";

const ForgetPassword = () => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitLogin = data => {
    dispatch(forgetPassword(data)).then(res => navigate("/user/login"));
  };
  return (
    <div className="flex min-h-screen p-6 dark:bg-gray-900 md:min-h-[90vh] md:items-center">
      <div className="mx-auto mt-16 h-full max-w-md flex-1 overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800 md:mt-0">
        <div className="p-6">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Reset Your Password
          </h1>
          <p className="text-gray-500">
            Lost your password? please enter your email address . You will
            receive a link to create a new password via email
          </p>
          <label className="text-md mt-2 block">
            <span className="font-bold text-gray-700 dark:text-gray-400">
              Email<span className="pl-1 text-red-600">*</span>
            </span>
            <input
              className="focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input mt-1 block w-full rounded border p-2 text-sm focus:border-purple-400 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              placeholder="example@email.com"
              {...register("email", {
                required: "You must specify an email",
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  message: "invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </label>

          <button
            disabled={!isValid}
            className="focus:shadow-outline-purple mt-4 block w-full rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:cursor-pointer hover:bg-blue-700 focus:outline-none active:bg-blue-600 disabled:bg-gray-500"
            onClick={handleSubmit(submitLogin)}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
