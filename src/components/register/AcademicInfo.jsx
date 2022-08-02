import { motion } from "framer-motion";
import CreatableSelect from "react-select/creatable";
import { Controller } from "react-hook-form";
import "./Style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValues } from "../../redux/features/document/documentAction";
const AcademicInfo = ({
  register,
  formState,
  formSetup,

  control,
}) => {
  const dispatch = useDispatch();
  const values = useSelector(state => state.documents.values);
  const universities = values[0]?.universities;
  const fieldofstudy = values[1]?.fieldofstudy;

  useEffect(() => {
    dispatch(getValues());
  }, []);

  const dicipline = [
    { label: "Bachlor", value: "bs" },
    { label: "Master", value: "ms" },
    { label: "Phd", value: "phd" },
  ];

  return (
    <motion.div
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      className={formSetup === 2 ? "block" : "hidden"}
    >
      <div className="p-6">
        <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
          Academic Info
        </h1>
        <label className="block text-sm">
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">Institute</span>
            <Controller
              className="z-10"
              name="institute"
              control={control}
              render={({ field }) => (
                <CreatableSelect options={universities} {...field} />
              )}
            />
          </label>
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Dicipline</span>

          <Controller
            name="dicipline"
            control={control}
            render={({ field }) => (
              <CreatableSelect options={dicipline} {...field} />
            )}
          />
        </label>
        {/* <select
            className="  w-full p-2  text-gray-700 bg-white border border-solid  rounded  focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none"
            aria-label="Select Dicipline"
            {...register("dicipline", {
              required: {
                value: true,
                message: "dicipline is required",
              },
            })}
          >
            <option value="bs" defaultValue>
              Bachlor
            </option>
            <option value="ms">Master</option>
            <option value="phd">PhD</option>
          </select> */}
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Field Of Study
          </span>
          <Controller
            name="fieldofstudy"
            control={control}
            render={({ field }) => (
              <CreatableSelect options={fieldofstudy} {...field} />
            )}
          />
        </label>
      </div>
    </motion.div>
  );
};

export default AcademicInfo;
