import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Select from "react-select";
import Loader from "../loader/Loader";
import { addQuestion } from "../../redux/features/questions/questionAction";
import { subjectsList } from "../../helpers/SubjectList";
import { getFields } from "../../redux/features/document/documentAction";
import { useEffect } from "react";

const AskQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    const questionData = {
      title: data.title,
      subject: data.subject.value,
      description: data.description,
    };
    dispatch(addQuestion(questionData)).then(
      res => res.payload && navigate("/questions/list")
    );
  };
  useEffect(() => {
    dispatch(getFields());
  }, []);
  return (
    <div className=" mt-28 flex min-h-screen p-3   md:mt-20  md:min-h-[90vh]  md:p-0 ">
      <div className="mx-auto h-full max-w-md flex-1 overflow-hidden rounded-lg border border-blue-300 bg-white shadow-xl ">
        <form onSubmit={handleSubmit(handleUpload)}>
          <div className="p-5">
            <p className="mb-4 text-xl font-semibold text-gray-700 ">
              Ask For Notes / Question
            </p>
            <label className="block text-sm">
              <span className="font-bold text-gray-700 ">Title</span>
              <input
                className="focus:shadow-outline-blue  block w-full rounded  border p-2 text-sm focus:border-blue-400 focus:outline-none "
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
              <div className="mb-1 font-bold text-gray-700  ">Subject</div>

              <Controller
                name="subject"
                rules={{ required: "You must specify a subject" }}
                control={control}
                render={({ field }) => (
                  <Select options={subjectsList()} {...field} />
                )}
              />
            </label>
            {errors.subject && (
              <p className="mt-2 text-sm text-red-600">
                {errors.subject.message}
              </p>
            )}
            <label className="mt-1 block text-sm">
              <span className="font-bold text-gray-700 ">
                Discription{" "}
                <span className="font-normal text-gray-500">(Optional)</span>
              </span>
              <textarea
                className="focus:shadow-outline-blue  mt-1 block h-24 w-full resize-none rounded border p-1 text-sm focus:border-blue-400 focus:outline-none"
                {...register("description")}
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
                <button className="btn btn-sm mt-2 flex gap-2 border-none bg-blue-600 px-7 text-white hover:bg-blue-700">
                  <i className="bi bi-check-circle"></i>
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
