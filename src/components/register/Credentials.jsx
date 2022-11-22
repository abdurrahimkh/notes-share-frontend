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
        <h1 className="mb-4 text-xl font-semibold text-gray-700   md:mx-36">
          Register
        </h1>

        <hr className="my-4 " />
        <label className="block text-sm">
          <span className="text-gray-700 ">Email</span>
          <input
            className="focus:shadow-outline-blue  form-input mt-1 block w-full rounded border p-2 text-sm focus:border-blue-400 focus:outline-none   "
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
            <p className="mt-2 text-sm text-red-600">
              {formState.errors.email.message}
            </p>
          )}
        </label>
        <label className="mt-4 block text-sm">
          <span className="text-gray-700 ">Password</span>
          <input
            className="focus:shadow-outline-blue  form-input mt-1 block w-full rounded border p-2 text-sm focus:border-blue-400 focus:outline-none   "
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
            <p className="mt-2 text-sm text-red-600">
              {formState.errors.password.message}
            </p>
          )}
        </label>
        <label className="mt-4 block text-sm">
          <span className="text-gray-700 ">Confirm Password</span>
          <input
            className="focus:shadow-outline-blue  form-input mt-1 block w-full rounded border p-2 text-sm focus:border-blue-400 focus:outline-none   "
            placeholder="***************"
            type="password"
            {...register("cpassword", {
              required: "confirm password is required",
              validate: value => value === password || "passwords do not match",
            })}
          />
          {formState.errors.cpassword && (
            <p className="mt-2 text-sm text-red-600">
              {formState.errors.cpassword.message}
            </p>
          )}
        </label>
      </div>
    </motion.div>
  );
};

export default Credentials;
