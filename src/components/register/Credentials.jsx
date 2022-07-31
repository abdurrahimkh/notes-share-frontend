import { motion } from "framer-motion";
const Credentials = ({
  setFormSetup,
  register,
  formState,
  formSetup,
  watch,
}) => {
  const password = watch("password");
  return (
    <motion.div
    initial={{ x: "50%" }}
      animate={{ x: 0 }}
      className={formSetup === 0 ? "block" : "hidden"}
      onSubmit={() => setFormSetup(cur => cur + 1)}
    >
      <div className="p-6">
        <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200 mx-36">
          Register
        </h1>

        <hr className="my-4 " />
        <label className="block text-sm">
          <span className="text-gray-700 dark:text-gray-400">Email</span>
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
          {formState.errors.email && (
            <p className="text-red-600 text-sm mt-2">
              {formState.errors.email.message}
            </p>
          )}
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Password</span>
          <input
            className="border rounded p-2 block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="***************"
            type="password"
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
            })}
          />
          {formState.errors.password && (
            <p className="text-red-600 text-sm mt-2">
              {formState.errors.password.message}
            </p>
          )}
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Confirm Password
          </span>
          <input
            className="border rounded p-2 block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="***************"
            type="password"
            {...register("cpassword", {
              required: "confirm password is required",
              validate: value => value === password || "passwords do not match",
            })}
          />
          {formState.errors.cpassword && (
            <p className="text-red-600 text-sm mt-2">
              {formState.errors.cpassword.message}
            </p>
          )}
        </label>
      </div>
    </motion.div>
  );
};

export default Credentials;
