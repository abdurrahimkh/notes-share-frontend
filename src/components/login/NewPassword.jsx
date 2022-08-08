import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { newPassoword } from "../../redux/features/auth/authAction";

const NewPassword = () => {
  const { token } = useParams();
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
    dispatch(newPassoword({ password: data.password, token })).then(res =>
      navigate("/user/login")
    );
  };
  return (
    <div className="flex min-h-[90vh] items-center p-6  dark:bg-gray-900">
      <div className="mx-auto h-full max-w-md flex-1 overflow-hidden rounded-lg border border-blue-300 bg-white shadow-xl dark:bg-gray-800">
        <div className="p-6">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Reset Password
          </h1>
          <label className="mt-4 block text-sm">
            <span className="text-gray-700 dark:text-gray-400">
              Enter New Password
            </span>
            <input
              className="focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input mt-1 block w-full rounded border p-2 text-sm focus:border-purple-400 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
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
              <p className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </label>

          <button
            disabled={!isValid}
            className="focus:shadow-outline-purple mt-4 block w-full rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:cursor-pointer hover:bg-blue-700 focus:outline-none active:bg-blue-600 disabled:bg-gray-500"
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
