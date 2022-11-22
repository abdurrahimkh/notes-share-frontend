import { useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addFieldOfStudy,
  addUniversity,
  deleteField,
  deleteUni,
  getFields,
} from "../../../redux/features/document/documentAction";
import FilterField from "./Filter/FilterField";
import FilterUni from "./Filter/FilterUni";
import UnisPagination from "./Pagination/UnisPagination";
import FieldPagination from "./Pagination/FieldPagination";
import LoaderSm from "../../loader/LoaderSm";

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

const TableRow = ({ data, title }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    if (title === "Universities") {
      dispatch(deleteUni({ id }));
    } else if (title === "Fields") {
      dispatch(deleteField({ id }));
    }
  };

  return (
    <tr className="hover:cursor-pointer hover:bg-gray-100 hover:font-semibold">
      <td className="whitespace-nowrap px-3 py-2 ">{data?.value}</td>
      <td className=" whitespace-nowrap py-2 text-sm">
        <i
          onClick={() => handleDelete(data?._id)}
          className="bi bi-trash cursor-pointer bg-red-100 p-1"
        ></i>
      </td>
    </tr>
  );
};

const ValuesList = ({ title, data }) => {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const { uniLoading } = useSelector(state => state.documents);
  const handleAdd = () => {
    if (title === "Universities") {
      if (inputRef.current.value === "") {
        return toast.error("Add a university");
      } else {
        dispatch(addUniversity({ university: inputRef.current.value })).then(
          () => {
            inputRef.current.value = "";
            toast.success("university added");
          }
        );
      }
    } else if (title === "Fields") {
      if (inputRef.current.value === "") {
        return toast.error("Add a field of study");
      } else {
        dispatch(addFieldOfStudy({ field: inputRef.current.value })).then(
          () => {
            inputRef.current.value = "";
            toast.success("field of study added");
            dispatch(getFields());
          }
        );
      }
    }
  };
  return (
    <div className="flex flex-col space-y-2">
      {title === "Universities" && <FilterUni />}
      {title === "Fields" && <FilterField />}
      <div className="flex flex-col  space-x-2 md:flex-row">
        <input
          type="text"
          ref={inputRef}
          className=" w-full rounded border p-1 focus:outline-blue-500 md:w-1/2"
          placeholder={
            title === "Universities"
              ? "Type University Name "
              : "Type Field Name"
          }
        />
        {uniLoading ? (
          <LoaderSm />
        ) : (
          <button
            onClick={handleAdd}
            className="mt-3 rounded-lg border-none bg-blue-700 py-1 px-8 text-white hover:bg-blue-800 md:mt-0"
          >
            ADD {title === "Universities" ? "UNIVERSITY" : "FIELD"}
          </button>
        )}
      </div>
      <h2 className=" text-center text-2xl font-bold tracking-wider">
        {title} List
      </h2>
      <div className="overflow-x-auto rounded-md shadow">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <TableHeader title={title} />
            </tr>
          </thead>
          <tbody className="divide-y bg-white">
            {data?.map((d, i) => {
              return <TableRow key={i} data={d} title={title} />;
            })}
          </tbody>
        </table>
        {title === "Universities" && <UnisPagination />}
        {title === "Fields" && <FieldPagination />}
      </div>
    </div>
  );
};

export default ValuesList;
