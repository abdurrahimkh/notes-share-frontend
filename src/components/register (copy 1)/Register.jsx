import { useState } from "react";
import Credentials from "./Credentials";
import PersonalInfo from "./PersonalInfo";
import AcademicInfo from "./AcademicInfo";
import RenderButton from "./RenderButton";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const [formSetup, setFormSetup] = useState(0);
  const formSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email(),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password length should be at least 6 characters"),
    cpassword: Yup.string()
      .required("Confirm Password is required")
      .min(6, "Password length should be at least 6 characters")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });
  const { register, formState, handleSubmit } = useForm({
    mode: "all",
    resolver: yupResolver(formSchema),
  });
  const maxSteps = 3;

  const nextPage = () => {
    setFormSetup(current => current + 1);
  };
  const prevPage = () => {
    setFormSetup(current => current - 1);
  };

  return (
    <div className="flex items-center min-h-[90vh] p-6 bg-gradient-to-b from-gray-50 to to-blue-200 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div>
          <div className="flex space-x-2 mt-2 ">
            {formSetup > 0 && (
              <button className="ml-2" type="button" onClick={() => prevPage()}>
                <div className="hover:text-blue-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M249.38 336L170 256l79.38-80m-68.35 80H342"
                    ></path>
                    <path
                      fill="none"
                      stroke-miterlimit="10"
                      stroke-width="32"
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
            />
          )}
          <RenderButton
            formSetup={formSetup}
            nextPage={nextPage}
            formState={formState}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
