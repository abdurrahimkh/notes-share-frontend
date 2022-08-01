import { useEffect, useState } from "react";
import Credentials from "./Credentials";
import PersonalInfo from "./PersonalInfo";
import AcademicInfo from "./AcademicInfo";
import RenderButton from "./RenderButton";
import { useForm } from "react-hook-form";

const Register = () => {
  const [formSetup, setFormSetup] = useState(0);
  const [universities, setUniversities] = useState([]);

  const { register, watch, formState, handleSubmit, control } = useForm({
    mode: "all",
  });
  const maxSteps = 3;

  const nextPage = () => {
    setFormSetup(current => current + 1);
  };
  const prevPage = () => {
    setFormSetup(current => current - 1);
  };

  // useEffect(() => {
  //   const fetchValues = async () => {
  //     const res = await fetch("http://localhost:8000/api/documents/values", {
  //       method: "get",
  //     });
  //     const result = await res.json();
  //     setUniversities(result.universities);
  //   };
  //   fetchValues();
  // }, []);

  return (
    <div className="flex items-center min-h-[90vh] p-6 bg-gradient-to-b from-gray-50 to to-blue-200 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-md mx-auto bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div>
          <div className="flex space-x-2 mt-2 ">
            {formSetup > 0 && (
              <button className="ml-2" type="button" onClick={() => prevPage()}>
                <div className="hover:text-blue-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M249.38 336L170 256l79.38-80m-68.35 80H342"
                    ></path>
                    <path
                      fill="none"
                      stroke-meterlimit="10"
                      strokeWidth="32"
                      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                    ></path>
                  </svg>
                </div>
              </button>
            )}
            <p className="text-sm text-gray-600 ml-2">
              Step {formSetup + 1} of {maxSteps}
            </p>
          </div>
          {formSetup >= 0 && (
            <Credentials
              register={register}
              formState={formState}
              formSetup={formSetup}
              watch={watch}
            />
          )}
          {formSetup >= 1 && (
            <PersonalInfo
              register={register}
              formState={formState}
              formSetup={formSetup}
            />
          )}
          {formSetup >= 2 && (
            <AcademicInfo
              register={register}
              formState={formState}
              formSetup={formSetup}
              watch={watch}
              universities={universities}
              control={control}
            />
          )}
          <RenderButton
            formSetup={formSetup}
            nextPage={nextPage}
            formState={formState}
            handleSubmit={handleSubmit}
            universities={universities}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
