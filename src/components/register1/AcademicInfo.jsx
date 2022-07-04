import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  chooseDicipline,
  chooseFos,
  chooseInstitue,
} from "../../redux/features/signup/SignupSlice";

const AcademicInfo = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const institute = useSelector(state => state.institute);
  // const dicipline = useSelector(state => state.dicipline);
  // const fieldofstudy = useSelector(state => state.fieldofstudy);
  // const { register, handleSubmit } = useForm({
  //   defaultValues: { institute, dicipline, fieldofstudy },
  // });
  // const onSubmit = data => {
  //   dispatch(chooseInstitue(data.institute));
  //   dispatch(chooseDicipline(data.dicipline));
  //   dispatch(chooseFos(data.fieldofstudy));
  //   alert("Submit Success");
  // };
  return (
    // <div className="flex items-center min-h-[90vh] p-6 bg-gradient-to-b from-gray-50 to to-blue-200 dark:bg-gray-900">
    <div className="flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form>
        <div className="p-6">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Academic Info
          </h1>
          <label className="block text-sm">
            <span className="text-gray-700 dark:text-gray-400">Institue</span>
            <input
              className="block border rounded p-2 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              placeholder="eg: University of Swabi"
              // {...register("institute")}
            />
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">Dicipline</span>
            <select
              className="  w-full p-2  text-gray-700 bg-white border border-solid  rounded  focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none"
              aria-label="Select Dicipline"
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
            >
              <option value="Agronomy" defaultValue>
                Agronomy
              </option>
              <option value="Architecture">Architecture</option>
              <option value="Biology">Biology</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Computerscience">Computer science</option>
              <option value="Economics">Economics</option>
              <option value="EducationandPedagogy">
                Education and Pedagogy
              </option>
              <option value="Engineering">Engineering</option>
              <option value="History">History</option>
              <option value="Philosophy">Philosophy</option>
            </select>
          </label>
          <div className="flex justify-center space-x-3">
            <button
              onClick={() => navigate("/step2")}
              className="  px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
            >
              Back
            </button>
            <button className="  px-4 py-2 mt-4  text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-purple">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default AcademicInfo;
