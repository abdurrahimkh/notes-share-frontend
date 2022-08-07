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

  return (
    <div className="flex min-h-screen p-6 dark:bg-gray-900  md:mt-0  md:min-h-[90vh]  md:items-center">
      <div className="mx-auto mt-32 h-full w-36 flex-1 rounded-lg border bg-white shadow-xl dark:bg-gray-800 md:mt-0 md:max-w-md ">
        <div>
          <div className="mt-2 flex space-x-2 ">
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
            <p className="ml-2 text-sm text-gray-600">
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
