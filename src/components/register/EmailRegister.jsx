import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin } from "../../redux/features/auth/authAction";
import { motion } from "framer-motion";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
const EmailRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(res =>
      dispatch(
        googleLogin({
          name: res.user.displayName,
          email: res.user.email,
          picture: res.user.photoURL,
        })
      ).then(res =>
        !res.payload.googlenew
          ? navigate("/user/complete/registration")
          : navigate("/")
      )
    );
  };
  return (
    <div className="flex  min-h-screen p-6  dark:bg-gray-900 md:mt-0 md:min-h-[90vh]  md:items-center">
      <motion.div
        initial={{ x: "50%" }}
        animate={{ x: 0 }}
        className="mx-auto mt-16 h-full max-w-md flex-1 overflow-hidden rounded-lg border border-blue-300 bg-white shadow-xl dark:bg-gray-800 md:mt-0"
      >
        <div className=" p-6">
          <h1 className="mx-14  mb-4 whitespace-nowrap text-xl font-semibold text-gray-700 dark:text-gray-200 md:mx-28">
            Create An Account
          </h1>
          <button
            onClick={() => navigate("/user/step")}
            className="focus:shadow-outline-gray flex w-full items-center justify-center space-x-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 hover:border-gray-500 focus:border-gray-500 focus:outline-none active:bg-transparent active:text-gray-500 dark:text-gray-400"
          >
            <span>Sign Up With</span>
            <div className=" pr-1">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            Email
          </button>

          <div className="divider text-gray-400">or</div>
          <button
            onClick={signInWithGoogle}
            className="focus:shadow-outline-gray flex w-full items-center justify-center space-x-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 hover:border-gray-500 focus:border-gray-500 focus:outline-none active:bg-transparent active:text-gray-500 dark:text-gray-400"
          >
            <span>Sign Up With</span>
            <div>
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
            </div>
            Google
          </button>
          <hr className="my-4 " />
          <p className="mt-1">
            <Link
              className="text-sm font-medium text-blue-600 hover:underline dark:text-purple-400"
              to="/user/login"
            >
              Already have account? Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailRegister;
