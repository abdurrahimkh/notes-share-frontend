import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../redux/features/auth/authAction";

const ProfilePasswordChange = ({
  register,
  formState,
  handleSubmit,
  reset,
}) => {
  const dispatch = useDispatch();
  const isPasswordLoading = useSelector(state => state.auth.isPasswordLoading);
  const handlePassword = data => {
    if (data.currentpassword.length > 0 && data.newpassword.length > 0) {
      dispatch(
        updatePassword({
          currentpassword: data.currentpassword,
          newpassword: data.newpassword,
        })
      ).then(() => reset({ currentpassword: "", newpassword: "" }));
    }
  };
  return (
    <div className="p-1 mt-2 md:p-5 md:w-96 border rounded-md">
      <h1 className="mb-4 text-xl font-light  tracking-widest text-gray-700 dark:text-gray-200 ">
        Password Information
      </h1>
      <label className="block text-sm">
        <span className="text-gray-700 dark:text-gray-400 font-bold">
          Current Password
        </span>
        <input
          className="input-update"
          type="password"
          placeholder="********"
          {...register("currentpassword")}
        />
      </label>
      <label className="block text-sm">
        <span className="text-gray-700 dark:text-gray-400 font-bold">
          New Password
        </span>
        <input
          className="input-update"
          type="password"
          placeholder="********"
          {...register("newpassword", {
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
          })}
        />
        {formState.errors.newpassword && (
          <p className="text-red-600 text-sm mt-2">
            {formState.errors.newpassword.message}
          </p>
        )}
      </label>
      <div className="flex justify-start">
        <button
          type="button"
          onClick={handleSubmit(data => handlePassword(data))}
          className="btn btn-success mt-5 "
        >
          {isPasswordLoading ? (
            <i className="bi bi-arrow-clockwise"></i>
          ) : (
            <i className="bi bi-key mr-2"></i>
          )}
          Change
        </button>
      </div>
    </div>
  );
};

export default ProfilePasswordChange;
