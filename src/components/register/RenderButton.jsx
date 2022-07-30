import { register } from "../../redux/features/auth/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addFieldOfStudy,
  addUniversity,
} from "../../redux/features/document/documentAction";
const RenderButton = ({
  formSetup,
  nextPage,
  formState: { isValid },
  universities,
  handleSubmit,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitForm = data => {
    console.log(data);
    if (data.institute.__isNew__) {
      dispatch(
        addUniversity({
          id: "62df6ccc14cb3a595f1c581d",
          newValue: data.institute.value,
        })
      );
    }
    if (data.fieldofstudy.__isNew__) {
      dispatch(
        addFieldOfStudy({
          id: "62e0de0f5a25e2cd79eec494",
          newValue: data.fieldofstudy.value,
        })
      );
    }
    const sendData = {
      email: data.email,
      password: data.password,
      name: data.name,
      gender: data.gender,
      username: data.username,
      dicipline: data.dicipline.value,
      fieldofstudy: data.fieldofstudy.value,
      institute: data.institute.value,
    };
    console.log(sendData);
    dispatch(register(sendData)).then(() => navigate("/"));
  };
  if (formSetup > 2) {
    return undefined;
  } else if (formSetup === 1) {
    return (
      <button
        onClick={() => nextPage()}
        type="button"
        disabled={!isValid}
        className="block w-full px-4 py-2  text-sm font-me dium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent disabled:bg-gray-400   active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
      >
        Next
      </button>
    );
  } else if (formSetup === 2) {
    return (
      <button
        type="button"
        disabled={!isValid}
        onClick={handleSubmit(submitForm)}
        className="block w-full px-4 py-2  text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent  active:bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400  focus:outline-none focus:shadow-outline-purple"
      >
        Create Account
      </button>
    );
  } else {
    return (
      <button
        type="button"
        disabled={!isValid}
        onClick={() => nextPage()}
        className="block w-full px-4 py-2 cursor-pointer  text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent  active:bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 focus:outline-none focus:shadow-outline-purple"
      >
        Signup
      </button>
    );
  }
};

export default RenderButton;
