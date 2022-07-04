import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  chooseEmail,
  choosePassword,
} from "../../redux/features/signup/SignupSlice";
import { useState } from "react";
import Credentials from "./Credentials";
import PersonalInfo from "./PersonalInfo";
import AcademicInfo from "./AcademicInfo";

const Register = () => {
  const [formSetup, setFormSetup] = useState(0);
  const nextPage = () => {
    setFormSetup(current => current + 1);
  };

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const email = useSelector(state => state.email);
  // const password = useSelector(state => state.password);
  // const { register, handleSubmit } = useForm({
  //   defaultValues: { email, password },
  // });
  // const onSubmit = data => {
  //   dispatch(chooseEmail(data.email));
  //   dispatch(choosePassword(data.password));
  //   navigate("/Step2");
  // };
  return (
    <div className="flex items-center min-h-[90vh] p-6 bg-gradient-to-b from-gray-50 to to-blue-200 dark:bg-gray-900">
      {formSetup === 0 && <Credentials setFormSetup={setFormSetup} />}
      {formSetup === 1 && <PersonalInfo />}
      {formSetup === 2 && <AcademicInfo />}
    </div>
  );
};

export default Register;
