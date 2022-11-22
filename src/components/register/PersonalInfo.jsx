import { motion } from "framer-motion";
const PersonalInfo = ({ register, formState, formSetup }) => {
  return (
    <motion.div
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      className={formSetup === 1 ? "block" : "hidden"}
    >
      <div className="p-6">
        <h1 className="mb-4 text-xl font-semibold text-gray-700 ">
          Personal Info
        </h1>
        <label className="block text-sm">
          <span className="text-gray-700 ">Name</span>
          <input
            className="focus:shadow-outline-blue  mt-1 block w-full rounded border p-2 text-sm focus:border-blue-400 focus:outline-none   "
            placeholder="eg: John Doe"
            {...register("name", {
              required: {
                value: true,
                message: "name is required",
              },
              pattern: {
                value: /^[a-zA-Z_ ]*$/,
                message: "Invalid Name",
              },
            })}
          />
          {formState.errors.name && (
            <p className="mt-2 text-sm text-red-600">
              {formState.errors.name.message}
            </p>
          )}
        </label>
        <label className="mt-4 block text-sm">
          <span className="text-gray-700 ">Gender</span>
          <div className="flex ">
            <div className="w-full xl:w-[25rem]">
              <select
                className="  w-full rounded  border border-solid bg-white p-2  text-gray-700  focus:border-blue-400 focus:bg-white focus:text-gray-700 focus:outline-none"
                aria-label="Select Gender"
                {...register("gender")}
              >
                <option value="male" defaultValue>
                  Male
                </option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </label>
        <label className="mt-4 block text-sm">
          <span className="text-gray-700 ">Username</span>
          <input
            className="focus:shadow-outline-blue  form-input mt-1 block w-full rounded border p-2 text-sm focus:border-blue-400 focus:outline-none   "
            placeholder="eg: elonmusk01"
            {...register("username", {
              required: {
                value: true,
                message: "username is required",
              },
            })}
          />
          {formState.errors.username && (
            <p className="mt-2 text-sm text-red-600">
              {formState.errors.username.message}
            </p>
          )}
        </label>
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
