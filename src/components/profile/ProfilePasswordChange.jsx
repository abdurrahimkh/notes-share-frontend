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
    <div className="mt-4 rounded-md border p-1 md:mt-0 md:w-96 md:p-5">
      <h1 className="mb-4 text-xl font-light  tracking-widest text-gray-700  ">
        Password Information
      </h1>
      <label className="block text-sm">
        <span className="font-bold text-gray-700 ">Current Password</span>
        <input
          className="input-update"
          type="password"
          placeholder="********"
          {...register("currentpassword")}
        />
      </label>
      <label className="block text-sm">
        <span className="font-bold text-gray-700 ">New Password</span>
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
          <p className="mt-2 text-sm text-red-600">
            {formState.errors.newpassword.message}
          </p>
        )}
      </label>
      <div className="flex justify-start">
        <button
          type="button"
          onClick={handleSubmit(data => handlePassword(data))}
          className="btn btn-sm  mt-5 flex gap-2 border-none bg-blue-600 px-6 text-white hover:bg-blue-700 "
        >
          {isPasswordLoading ? (
            <i className="bi bi-arrow-clockwise animate-spin"></i>
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
