import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addSubject,
  submitDocument,
} from "../../redux/features/document/documentAction";
import CreatableSelect from "react-select/creatable";
import Loader from "../loader/Loader";
import { addQuestion } from "../../redux/features/questions/questionAction";

const AskQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values } = useSelector(state => state.documents);
  const subjects = values[2]?.subjects;
  const { isLoading } = useSelector(state => state.questions);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
  });

  const handleUpload = data => {
    console.log(data);
    if (data.subject.__isNew__) {
      dispatch(
        addSubject({
          id: "62e36574bca949a2bfca94ee",
          newValue: data.subject.value,
        })
      );
    }
    const questionData = {
      title: data.title,
      subject: data.subject.value,
      description: data.description,
    };
    dispatch(addQuestion(questionData)).then(
      res => res.payload && navigate("/")
    );
  };

  return (
    <div className="mt-6 flex min-h-[70vh] items-center  dark:bg-gray-900 ">
      <div className="mx-auto h-full max-w-md flex-1 overflow-hidden rounded-lg border border-blue-300 bg-white shadow-xl dark:bg-gray-800">
        <form onSubmit={handleSubmit(handleUpload)}>
          <div className="p-5">
            <p className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Ask For Notes / Question
            </p>
            <label className="block text-sm">
              <span className="font-bold text-gray-700 dark:text-gray-400">
                Title
              </span>
              <input
                className="focus:shadow-outline-purple dark:focus:shadow-outline-gray block w-full rounded  border p-2 text-sm focus:border-purple-400 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                {...register("title", {
                  required: "You must specify a title",
                })}
              />
              {errors.title && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.title.message}
                </p>
              )}
            </label>
            <label className="mt-1 block text-sm">
              <div className="mb-1 font-bold text-gray-700 dark:text-gray-400 ">
                Subject
              </div>

              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <CreatableSelect options={subjects} {...field} />
                )}
              />
            </label>
            <label className="mt-1 block text-sm">
              <span className="font-bold text-gray-700 dark:text-gray-400">
                Discription{" "}
                <span className="font-normal text-gray-500">(Optional)</span>
              </span>
              <textarea
                className="focus:shadow-outline-purple dark:focus:shadow-outline-gray mt-1 block h-24 w-full resize-none rounded border p-1 text-sm focus:border-purple-400 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                {...register("description", {
                  required: "You must specify a discription",
                })}
              />
              {errors.description && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.description.message}
                </p>
              )}
            </label>

            <div className="mt-2 flex justify-center space-x-3">
              {isLoading ? (
                <Loader />
              ) : (
                <button className="btn btn-success btn-sm mt-2 flex gap-2">
                  {/* <i className="bi bi-file-earmark-arrow-up"></i> */}
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
