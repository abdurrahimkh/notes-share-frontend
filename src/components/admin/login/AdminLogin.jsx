import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminlogin } from "../../../redux/features/auth/authAction";
import LoaderSm from "../../loader/LoaderSm";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector(state => state.auth);
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });
  const submitLogin = data => {
    dispatch(adminlogin(data)).then(
      res => res.payload && navigate("/admin/users")
    );
  };
  return (
    <div className="flex min-h-screen items-center bg-gray-100 p-6 ">
      <div className="mx-auto h-full max-w-md flex-1 overflow-hidden rounded-lg bg-white shadow-xl ">
        <div className="p-6">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 ">Admin</h1>
          <label className="block text-sm">
            <span className="text-gray-700 ">Email</span>
            <input
              className="focus:shadow-outline-blue form-input mt-1 block w-full rounded border p-2 text-sm focus:border-blue-400 focus:outline-none "
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
          <label className="mt-4 block text-sm">
            <span className="text-gray-700 ">Password</span>
            <input
              className="focus:shadow-outline-blue  form-input mt-1 block w-full rounded border p-2 text-sm focus:border-blue-400 focus:outline-none "
              placeholder="***************"
              type="password"
              {...register("password", {
                required: "You must specify a password",
                minLength: {
                  value: 6,
                  message: "Password too short",
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
            type="submit"
            disabled={!isValid}
            className="focus:shadow-outline-blue mt-4 block w-full rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:cursor-pointer hover:bg-blue-700 focus:outline-none active:bg-blue-600 disabled:bg-gray-500"
            onClick={handleSubmit(submitLogin)}
          >
            {isLoading ? <LoaderSm /> : "Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
