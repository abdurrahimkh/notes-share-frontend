import { motion } from "framer-motion";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/features/auth/authAction";

const Login = () => {
  const isActive = useSelector(state => state.auth.isActive);
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
    dispatch(login(data)).then(res => res.payload && navigate("/home"));
  };
  useEffect(() => {
    if (isActive) {
      navigate("/home");
    }
  }, [isActive]);

  return (
    <div className="flex md:items-center min-h-screen md:min-h-[90vh] p-6 bg-gradient-to-b from-gray-50 to to-blue-200 dark:bg-gray-900">
      <motion.div
        initial={{ x: "50%" }}
        animate={{ x: 0 }}
        className="flex-1 h-full mt-28 md:mt-0 max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
      >
        <div className="p-6">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Login
          </h1>
          <label className="block text-sm">
            <span className="text-gray-700 dark:text-gray-400 font-bold">
              Email
            </span>
            <input
              className="block border rounded p-2 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
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
              <p className="text-red-600 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400 font-bold">
              Password
            </span>
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
            onClick={handleSubmit(submitLogin)}
          >
            Log in
          </button>
          <div className="divider">OR</div>
          <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
            <svg
              className="mr-1"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              height="1.4em"
              width="1.4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	              c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	              c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	              C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	              c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	              c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Google
          </button>

          <p className="mt-4">
            <Link
              to="/forgetpassword"
              className="text-sm font-medium text-blue-600 dark:text-purple-400 hover:underline"
            >
              Forgot your password?
            </Link>
          </p>
          <p className="mt-1">
            <Link
              to="/user/register"
              className="text-sm font-medium text-blue-600 dark:text-purple-400 hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
