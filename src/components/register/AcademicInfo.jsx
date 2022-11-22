import { motion } from "framer-motion";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { Controller } from "react-hook-form";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getFields,
  getUniversities,
} from "../../redux/features/document/documentAction";
import { useEffect } from "react";

const AcademicInfo = ({ formSetup, control }) => {
  const { fields, universities } = useSelector(state => state.documents);
  const dispatch = useDispatch();
  const dicipline = [
    { label: "Bachlor", value: "bs" },
    { label: "Master", value: "ms" },
    { label: "Phd", value: "phd" },
  ];
  useEffect(() => {
    dispatch(getFields());
    dispatch(getUniversities());
  }, []);
  return (
    <motion.div
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      className={formSetup === 2 ? "block" : "hidden"}
    >
      <div className="p-6">
        <h1 className="mb-4 text-xl font-semibold text-gray-700 ">
          Academic Info
        </h1>
        <label className="block text-sm">
          <label className="mt-4 block text-sm">
            <span className="text-gray-700 ">Institute</span>
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
        <label className="mt-4 block text-sm">
          <span className="text-gray-700 ">Dicipline</span>
          <Controller
            name="dicipline"
            control={control}
            render={({ field }) => <Select options={dicipline} {...field} />}
          />
        </label>
        <label className="mt-4 block text-sm">
          <span className="text-gray-700 ">Field Of Study</span>
          <Controller
            name="fieldofstudy"
            control={control}
            render={({ field }) => (
              <CreatableSelect options={fields} {...field} />
            )}
          />
        </label>
      </div>
    </motion.div>
  );
};

export default AcademicInfo;
