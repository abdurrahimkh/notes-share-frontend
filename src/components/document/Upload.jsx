import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addSubject,
  submitDocument,
} from "../../redux/features/document/documentAction";
import LoadingButton from "./LoadingButton";
import CreatableSelect from "react-select/creatable";

const Upload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, values } = useSelector(state => state.documents);
  const { fieldofstudy } = useSelector(state => state.auth.user);
  const subjects = values[2]?.subjects;
  console.log(subjects);

  const {
    register,
    watch,
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
          field: fieldofstudy,
        })
      );
    }
    const uploadData = {
      title: data.title,
      subject: data.subject.value,
      description: data.description,
      field: fieldofstudy,
      document: data.file[0],
    };
    dispatch(submitDocument(uploadData)).then(
      res => res.payload && navigate("/")
    );
  };
  const file = watch("file");
  const filename = file ? file[0].name : "";

  return (
    <div className="flex items-center min-h-[90vh] p-6 bg-gradient-to-b from-gray-50 to to-blue-200 dark:bg-gray-900 ">
      <div className="flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <form onSubmit={handleSubmit(handleUpload)}>
          <div className="p-5">
            <p className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Upload File
            </p>
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400 font-bold">
                Title
              </span>
              <input
                className="block border rounded p-2 w-full  text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray"
                {...register("title", {
                  required: "You must specify a title",
                })}
              />
              {errors.title && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.title.message}
                </p>
              )}
            </label>
            <label className="block text-sm mt-1">
              <div className="text-gray-700 mb-1 dark:text-gray-400 font-bold ">
                Subject
              </div>

              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <CreatableSelect options={subjects} {...field} />
                )}
              />
              {/* <input
                className="block border rounded p-2 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray"
                {...register("subject", {
                  required: "You must specify a subject",
                })}
              />
              {errors.subject && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.subject.message}
                </p>
              )} */}
            </label>
            <label className="block text-sm mt-1">
              <span className="text-gray-700 dark:text-gray-400 font-bold">
                Discription
              </span>
              <textarea
                className="block border rounded h-24 resize-none p-1 w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray"
                {...register("description", {
                  required: "You must specify a discription",
                })}
              />
              {errors.discription && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.discription.message}
                </p>
              )}
            </label>
            <div className="flex justify-center mt-2 ">
              <div className="max-w-2xl rounded-lg shadow-xl">
                <div className="m-2">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed  hover:bg-gray-100 hover:border-gray-300">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        {file ? (
                          <p>{filename}</p>
                        ) : (
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            <span className="flex justify-center">
                              Attach a file <br />
                            </span>
                            PDF,PPT, DOC or DOCX (MAX. 10MB)
                          </p>
                        )}
                      </div>
                      <input
                        type="file"
                        accept=".pdf , .doc,.docx,.ppt,.pptx"
                        className="opacity-0"
                        {...register("file", {
                          required: "select a file",
                          validate: value =>
                            value[0].size <= 100000000 || "Size is too large",
                        })}
                      />
                    </label>
                  </div>
                  {errors.file && (
                    <p className="text-red-600 text-sm mt-2">
                      {errors.file.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-3">
              {isLoading ? (
                <LoadingButton />
              ) : (
                <button className=" flex px-4 py-2 mt-4  text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-purple">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
                  </svg>
                  Upload
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
