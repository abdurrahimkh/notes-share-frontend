import { register } from "../../redux/features/auth/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addFieldOfStudy,
  addUniversity,
} from "../../redux/features/document/documentAction";
import LoaderSm from "../loader/LoaderSm";
const RenderButton = ({
  formSetup,
  nextPage,
  formState: { isValid },
  handleSubmit,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector(state => state.auth);

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
    dispatch(register(sendData)).then(res => res.payload && navigate("/"));
  };
  if (formSetup > 2) {
    return undefined;
  } else if (formSetup === 1) {
    return (
      <button
        onClick={() => nextPage()}
        type="button"
        disabled={!isValid}
        className="font-me dium focus:shadow-outline-purple block  w-full border border-transparent bg-blue-600 px-4 py-2 text-center text-sm leading-5 text-white transition-colors duration-150   hover:bg-blue-700 focus:outline-none active:bg-blue-600 disabled:bg-gray-400"
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
        className="focus:shadow-outline-purple block w-full border  border-transparent bg-blue-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors  duration-150 hover:bg-blue-700 focus:outline-none  active:bg-blue-600 disabled:bg-gray-400"
      >
        {isLoading ? <LoaderSm /> : "Create Account"}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        disabled={!isValid}
        onClick={() => nextPage()}
        className="focus:shadow-outline-purple block w-full cursor-pointer border  border-transparent bg-blue-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors  duration-150 hover:bg-blue-700 focus:outline-none active:bg-blue-600 disabled:bg-gray-400"
      >
        Continue
      </button>
    );
  }
};

export default RenderButton;
