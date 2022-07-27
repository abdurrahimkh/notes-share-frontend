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
  console.log(fieldofstudy);
  // const universities = values[0].universities
  // const fieldofstudy = values[1].fieldofstudy

  useEffect(() => {
    dispatch(getValues());
  }, []);

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
            {/* <select
              className="  w-full p-2  text-gray-700 bg-white border border-solid  rounded  focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none"
              aria-label="Select Institue"
              {...register("institute", {
                required: {
                  value: true,
                  message: "Institue is required",
                },
              })}
            >
              {universities.map((item, key) => (
                <option key={key} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select> */}
          </label>
          {/* <input
            className="block border rounded p-2 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="eg: University of Swabi"
            {...register("institute", {
              required: {
                value: true,
                message: "institute is required",
              },
            })}
          />
          {formState.errors.institute && (
            <p className="text-red-600 text-sm mt-2">
              {formState.errors.institute.message}
            </p>
          )} */}
          {/* <input
            className="border rounded p-2 block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            type="text"
            list="data"
            placeholder="eg : University of Swabi"
            {...register("institute")}
          />
          <datalist id="data">
            {universities.map((item, key) => (
              <option key={key} value={item.label} />
            ))}
          </datalist> */}
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Dicipline</span>
          <select
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
          </select>
        </label>
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
          {/* <select
            className="  w-full p-2  text-gray-700 bg-white border border-solid  rounded  focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none"
            aria-label="Select Field"
            {...register("fieldofstudy", {
              required: {
                value: true,
                message: "field of study is required",
              },
            })}
          >
            <option value="Agronomy" defaultValue>
              Agronomy
            </option>
            <option value="Architecture">Architecture</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Computerscience">Computer science</option>
            <option value="Economics">Economics</option>
            <option value="EducationandPedagogy">Education and Pedagogy</option>
            <option value="Engineering">Engineering</option>
            <option value="History">History</option>
            <option value="Philosophy">Philosophy</option>
          </select> */}
        </label>
      </div>
    </motion.div>
  );
};

export default AcademicInfo;
