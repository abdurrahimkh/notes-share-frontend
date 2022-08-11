import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { format } from "timeago.js";
import {
  addAnswer,
  deleteAnswer,
  questionDetails,
} from "../../redux/features/questions/questionAction";
import Loader from "../loader/Loader";
import LoaderSm from "../loader/LoaderSm";

const QuestionDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, answerPostLoading, eachQuestion } = useSelector(
    state => state.questions
  );
  const userId = useSelector(state => state.auth.user._id);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const submitAnswer = data => {
    console.log(data);
    dispatch(addAnswer({ id, answer: data.answer, file: data.file[0] })).then(
      reset()
    );
  };
  const handleDelete = commentId => {
    console.log("CLICKED", commentId);
    dispatch(deleteAnswer({ postId: eachQuestion._id, commentId }));
  };
  useEffect(() => {
    dispatch(questionDetails(id));
  }, []);

  return (
    <>
      <div className="py-5 px-10 lg:px-64">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex  gap-10 rounded-lg border-2 bg-white p-4 leading-normal md:gap-5   ">
            <div className="flex items-center">
              <img
                className="mr-4 h-10 w-10 rounded-full"
                src={eachQuestion?.postedBy?.pic}
                alt="Avatar of Writer"
              />
              <div className="text-sm">
                <p className="leading-none text-gray-900">
                  {eachQuestion?.postedBy?.name}
                </p>
                <p className="text-gray-600">
                  {format(eachQuestion.createdAt)}
                </p>
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-2 text-2xl font-bold text-gray-900">
                <i className="bi bi-question-circle"></i> {eachQuestion.title}
              </div>
              <p className="text-base text-gray-700">
                <span className="font-sm text-gray-500">
                  Description <i className="bi bi-card-text"></i>{" "}
                </span>
                : {eachQuestion.description}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="py-2 px-10 lg:px-64">
        <form
          onSubmit={handleSubmit(submitAnswer)}
          className="rounded-lg border-2 bg-white p-2 "
        >
          <div className="-mx-3 mb-6 ">
            <h2 className="px-4 pt-3 pb-2 text-lg font-semibold text-gray-800">
              Your Answer
            </h2>
            <div className="mb-2 mt-2 w-full px-3 md:w-full">
              <textarea
                className="h-20 w-full resize-none rounded border border-gray-400 bg-gray-100 py-2 px-3 font-medium leading-normal placeholder-gray-700 focus:bg-white focus:outline-none"
                name="body"
                placeholder="Type...."
                {...register("answer", {
                  required: true,
                })}
              />
              {errors.answer && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.answer.message}
                </p>
              )}
            </div>
            <div className="divider px-3">(Optional)</div>
            <div className=" flex w-full  px-3 md:w-full">
              <div className=" flex flex-col items-center gap-5 text-gray-700 md:flex-row  lg:space-x-64">
                <input
                  className="block cursor-pointer rounded-lg border border-gray-300 bg-gray-50 py-1 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 lg:px-5"
                  id="file_input"
                  type="file"
                  accept=".pdf , .doc,.docx,.ppt,.pptx"
                  {...register("file", {
                    // validate: {
                    //   lessThan10MB: files =>
                    //     files[0]?.size < 10000000 || "Max 10MB",
                    //   acceptedFormats: files =>
                    //     [
                    //       "application/pdf",
                    //       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    //       "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    //     ].includes(files[0]?.type) || "Invalid File Type",
                    // },
                  })}
                />
                {errors.file && (
                  <p className="text-bold mt-2 rounded-md bg-red-100 text-center font-mono text-red-600 ">
                    {errors.file.message}
                  </p>
                )}
                <button
                  type="submit"
                  className="mr-1 rounded-lg border border-gray-400 bg-white py-1 px-4 font-medium tracking-wide text-gray-700 hover:cursor-pointer hover:bg-gray-100 "
                >
                  {answerPostLoading ? <LoaderSm /> : "Post Answer"}
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </form>
      </div>
      {eachQuestion?.answers?.map(answer => (
        <div key={answer._id} className="py-1 px-10 lg:px-64">
          <div className="flex gap-4 rounded-lg border bg-white p-4 leading-normal   ">
            <div className="flex  items-center gap-3">
              <div className="flex flex-col items-center justify-center md:w-28">
                <img
                  className="h-10 w-10 rounded-full"
                  src={answer.answerBy.pic}
                  alt="Avatar of Writer"
                />
                <p className="mt-1 leading-none text-gray-900">
                  {answer.answerBy.name}
                </p>
                <p className="whitespace-nowrap text-gray-600">
                  {format(answer.createdAt)}
                </p>
              </div>

              <div className="mb-4">
                <div className="mb-2   text-gray-900 md:w-[38rem]">
                  {answer.text}
                </div>
                {answer.file && (
                  <p
                    onClick={() => window.open(answer.file, "_blank")}
                    className="text-base text-gray-700 hover:cursor-pointer"
                  >
                    <i className="bi bi-paperclip"></i>
                    Attached Document
                  </p>
                )}
              </div>
              <div
                onClick={() => handleDelete(answer._id)}
                data-tip="Delete Answer"
                className="tooltip"
              >
                {answer.answerBy._id === userId && (
                  <i className="bi bi-x-circle-fill  mt-1 text-right text-2xl hover:cursor-pointer"></i>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default QuestionDetails;
