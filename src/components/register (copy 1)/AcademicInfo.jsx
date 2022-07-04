const AcademicInfo = ({ register, formState, formSetup }) => {
  return (
    <div className={formSetup === 2 ? "block" : "hidden"}>
      <div className="p-6">
        <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
          Academic Info
        </h1>
        <label className="block text-sm">
          <span className="text-gray-700 dark:text-gray-400">Institute</span>
          <input
            className="block border rounded p-2 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="eg: University of Swabi"
            {...register("institute", {
              required: { value: true, message: "enter your institute name" },
            })}
          />
          {formState.errors.institute && (
            <p className="text-red-600 text-sm mt-2">
              {formState.errors.institute.message}
            </p>
          )}
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Dicipline</span>
          <select
            className="  w-full p-2  text-gray-700 bg-white border border-solid  rounded  focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none"
            aria-label="Select Dicipline"
            {...register("dicipline")}
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
          <select
            className="  w-full p-2  text-gray-700 bg-white border border-solid  rounded  focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none"
            aria-label="Select Field"
            {...register("fieldofstudy")}
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
          </select>
        </label>
      </div>
    </div>
  );
};

export default AcademicInfo;
