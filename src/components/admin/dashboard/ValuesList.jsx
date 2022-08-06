import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  addFieldOfStudy,
  addSubject,
  addUniversity,
  deleteValue,
} from "../../../redux/features/document/documentAction";

const TableHeader = ({ title }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {title}
    </th>
  );
};

const TableRow = ({ data, id }) => {
  const dispatch = useDispatch();
  const deleteItem = (value, id) => {
    dispatch(deleteValue({ id, value }));
  };

  return (
    <tr className="hover:bg-gray-100 hover:cursor-pointer hover:font-semibold">
      <td className="px-3 py-4 whitespace-nowrap ">{data?.value}</td>
      <td className="px-3 py-4 whitespace-nowrap text-sm">
        <i
          onClick={() => deleteItem(data?.value, id)}
          className="bi bi-trash bg-red-100 p-1 cursor-pointer"
        ></i>
      </td>
    </tr>
  );
};

const ValuesList = ({ title, data, id }) => {
  const dispatch = useDispatch();
  const inputRef = useRef("");

  const handleAdd = () => {
    if (title === "Universities") {
      dispatch(addUniversity({ id, newValue: inputRef.current.value }));
    } else if (title === "Fields") {
      dispatch(addFieldOfStudy({ id, newValue: inputRef.current.value }));
    } else if (title === "Subjects") {
      dispatch(addSubject({ id, newValue: inputRef.current.value }));
    }
  };
  return (
    <div className="flex flex-col space-y-2">
      <div className="space-x-2">
        <input
          type="text"
          ref={inputRef}
          className="w-1/2 border rounded p-1"
        />
        <button onClick={handleAdd} className="btn btn-success">
          ADD
        </button>
      </div>
      <h2 className=" text-2xl font-bold  tracking-wider">{title}</h2>
      <div className="shadow overflow-x-auto rounded-md">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <TableHeader title="Universites" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {data &&
              data.map((d, i) => {
                return <TableRow key={i} data={d} id={id} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ValuesList;
