import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addFieldOfStudy,
  addSubject,
  getFields,
  submitDocument,
} from "../../redux/features/document/documentAction";
import CreatableSelect from "react-select/creatable";
import axios from "axios";
import { useEffect, useState } from "react";
import Progress from "../loader/Progress";
import toast from "react-hot-toast";

const Upload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const { fields } = useSelector(state => state.documents);
  const [subjects, setSubjects] = useState([]);
  const [selectedField, setSelectedField] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const {
    register,
    watch,

    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
  });

  const handleSubjectChange = selectedOption => {
    setSelectedSubject(selectedOption);
    if (selectedOption.__isNew__) {
      dispatch(
        addSubject({
          fieldId: subjects._id,
          subject: selectedOption.label,
        })
      );
    }
  };

  const handleFieldChange = selectedOption => {
    setSelectedField(selectedOption);
    setSubjects(selectedOption);
    if (selectedOption.__isNew__) {
      dispatch(
        addFieldOfStudy({
          field: selectedOption.label,
        })
      );
    }
  };

  const handleUpload = async uploadData => {
    if (!selectedField) {
      toast.error("Please Select Field Of Study");
    } else if (!selectedSubject) {
      toast.error("Please Select Subject");
    } else {
      const data = new FormData();
      data.append("file", uploadData.file[0]);
      data.append("upload_preset", "fyp-project");
      data.append("cloud_name", "fypproject07");
      const res = await axios({
        method: "post",
        url: "https://api.cloudinary.com/v1_1/fypproject07/raw/upload",
        data,
        onUploadProgress: data =>
          setProgress(Math.round((data.loaded / data.total) * 100)),
      });
      await dispatch(
        submitDocument({
          title: uploadData.title,
          subject: selectedSubject.value,
          description: uploadData.description,
          field: selectedField.value,
          url: res.data.secure_url,
          filetype: uploadData.file[0].type,
          size: res.data.bytes,
        })
      ).then(res => res.payload && navigate("/home"));
    }
  };
  const file = watch("file");
  console.log(file);
  const filename = file && file[0]?.name;
  useEffect(() => {
    dispatch(getFields());
  }, []);
  return (
    <div className="mt-6 flex min-h-[86vh] items-center  pb-5 ">
      <div className="mx-3   h-full max-w-md flex-1 overflow-hidden rounded-lg border border-blue-300 bg-white shadow-xl md:mx-auto">
        <form onSubmit={handleSubmit(handleUpload)}>
          <div className="p-5">
            <p className="mb-4 text-xl font-semibold text-gray-700">
              Upload File
            </p>
            <label className="block text-sm">
              <span className="font-bold text-gray-700">Title</span>
              <input
                className="input-update"
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
              <div className="mb-1 font-bold text-gray-700 ">
                Field Of Study
              </div>
              <CreatableSelect options={fields} onChange={handleFieldChange} />
            </label>
            <label className="mt-1 block text-sm">
              <div className="mb-1 font-bold text-gray-700 ">Subject</div>
              <CreatableSelect
                options={subjects?.subjects}
                onChange={handleSubjectChange}
              />
            </label>
            <label className="mt-1 block text-sm">
              <span className="font-bold text-gray-700">Description</span>
              <textarea
                className="mt-1 block h-24 w-full resize-none rounded border p-1 text-sm focus:outline-blue-400"
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
            <div className="mt-2 flex justify-center ">
              <div className="max-w-2xl rounded-lg ">
                <div className="m-2">
                  <div className="flex w-full items-center justify-center   px-2 md:px-0">
                    <label className="flex h-20  w-full flex-col border-4 border-dashed border-blue-200 hover:cursor-pointer  hover:border-gray-300 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center ">
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
                        {file && file.length > 0 ? (
                          <p>{filename}</p>
                        ) : (
                          <p className=" text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
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
            <div className="mt-2 flex justify-center space-x-3">
              {progress > 0 ? (
                <Progress progress={progress} />
              ) : (
                <button className="btn btn-sm mt-2 flex gap-2 border-none bg-blue-600 px-6 text-white hover:bg-blue-700">
                  <i className="bi bi-file-earmark-arrow-up"></i>
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
