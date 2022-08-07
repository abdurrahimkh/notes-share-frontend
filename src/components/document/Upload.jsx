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
  const filename = file && file[0]?.name;

  return (
    <div className="mt-6 flex min-h-[70vh] items-center  dark:bg-gray-900 ">
      <div className="mx-auto h-full max-w-md flex-1 overflow-hidden rounded-lg border bg-white shadow-xl dark:bg-gray-800">
        <form onSubmit={handleSubmit(handleUpload)}>
          <div className="p-5">
            <p className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Upload File
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
                Discription
              </span>
              <textarea
                className="focus:shadow-outline-purple dark:focus:shadow-outline-gray mt-1 block h-24 w-full resize-none rounded border p-1 text-sm focus:border-purple-400 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                {...register("description", {
                  required: "You must specify a discription",
                })}
              />
              {errors.discription && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.discription.message}
                </p>
              )}
            </label>
            <div className="mt-2 flex justify-center ">
              <div className="max-w-2xl rounded-lg shadow-xl">
                <div className="m-2">
                  <div className="flex w-full items-center justify-center   px-2 md:px-0">
                    <label className="flex h-32  w-full flex-col border-4 border-dashed border-blue-200  hover:border-gray-300 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-400 group-hover:text-gray-600"
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
                          validate: {
                            lessThan10MB: files =>
                              files[0]?.size < 10000000 || "Max 10MB",
                            acceptedFormats: files =>
                              [
                                "application/pdf",
                                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                              ].includes(files[0]?.type) || "Invalid File Type",
                          },
                        })}
                      />
                    </label>
                  </div>
                  {errors.file && (
                    <p className="text-bold mt-2 rounded-md bg-red-100 text-center font-mono text-red-600 ">
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
                <button className=" focus:shadow-outline-purple mt-4 flex rounded-lg  border border-transparent bg-green-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-green-700 focus:outline-none active:bg-green-600">
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
