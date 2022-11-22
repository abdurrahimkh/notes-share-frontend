import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  addSubject,
  deleteSubject,
  getFields,
} from "../../../redux/features/document/documentAction";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const TableHeader = ({ title }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
    >
      {title}
    </th>
  );
};

const SubjectValues = ({ title }) => {
  const data = useSelector(state => state.documents.subjects);
  const [subject, setSubject] = useState([]);
  const [fieldId, setFieldId] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const handleAdd = () => {
    if (inputRef.current.value === "") {
      return toast.error("Add a university");
    } else {
      dispatch(addSubject({ fieldId, subject: inputRef.current.value })).then(
        () => dispatch(getFields())
      );
    }
  };
  const deleteItem = id => {
    dispatch(deleteSubject({ subjectId: id, fieldId })).then(() =>
      dispatch(getFields())
    );
  };

  const handleSubjectChange = selectedOption => {
    setSubject(selectedOption.subjects);
    setFieldId(selectedOption._id);
  };

  return (
    <div className="flex flex-col space-y-2 ">
      {!fieldId.length > 0 && (
        <h2 className=" text-center text-2xl font-bold tracking-wider">
          Select Field
        </h2>
      )}

      <div className="w-72 md:ml-60 md:w-[30rem] ">
        <Select options={data} onChange={handleSubjectChange} />
      </div>

      {fieldId.length > 0 && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="flex flex-col justify-center space-x-2 md:flex-row"
        >
          <input
            type="text"
            ref={inputRef}
            className="h-9 w-full rounded border p-1 md:mt-3 md:w-1/2"
          />
          <button
            onClick={handleAdd}
            className="md:mt-0rounded-lg mt-3 rounded-lg  border-none  bg-blue-700  py-1 px-8 text-white hover:bg-blue-800"
          >
            ADD SUBJECT
          </button>
        </motion.div>
      )}
      {fieldId.length > 0 && (
        <h2 className=" text-center text-2xl font-bold tracking-wider">
          {title} List
        </h2>
      )}
      <div className="overflow-x-auto rounded-md shadow">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <TableHeader title={title} />
            </tr>
          </thead>
          <tbody className="divide-y bg-white">
            {subject?.map((data, i) => {
              return (
                <tr
                  key={i}
                  className="hover:cursor-pointer hover:bg-gray-100 hover:font-semibold"
                >
                  <td className="whitespace-nowrap px-3 py-4 ">
                    {data?.value}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <i
                      onClick={() => deleteItem(data?._id)}
                      className="bi bi-trash cursor-pointer bg-red-100 p-1"
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubjectValues;
