import { DocumentIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  approve,
  reject,
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
  S;
};

//Function for render Table

const TableRow = ({ data }) => {
  const dispatch = useDispatch();
  let statusClass = " bg-green-100 text-green-700";
  if (data.status === "rejected") {
    statusClass = " bg-red-100 text-red-700";
  } else if (data.status === "pending") {
    statusClass = " bg-blue-100 text-blue-700";
  }

  // Function For Approval
  const handleApprove = id => {
    console.log("APPROVE CALLED");
    dispatch(approve(id));
  };
  const handleReject = id => {
    console.log("REJECT CALLED");
    dispatch(reject(id));
  };
  return (
    <tr>
      <td className="px-3 py-4 whitespace-nowrap text-sm">{data.title}</td>
      <td className="px-3 py-4 whitespace-nowrap text-sm">{data.subject}</td>
      <td className="px-3 py-4 whitespace-nowrap text-sm">
        <div className="tooltip" data-tip={data.postedBy.email}>
          {data.postedBy.name}
        </div>
      </td>
      <td>
        <div
          onClick={() => window.open(data.url, "_blank")}
          className="flex justify-center  hover:border hover:bg-gray-50"
        >
          <DocumentIcon className="w-5 h-5 cursor:pointer" />
          <button className="" target="_blank">
            File
          </button>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={
            "px-2 py-1 text-sm font-medium rounded-full capitalize" +
            statusClass
          }
        >
          {data.status}
        </span>
      </td>
      <td className=" whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => handleApprove(data._id)}
          className="bg-green-100 px-3 py-1 rounded text-green-600 hover:text-green-800"
        >
          <i className="bi bi-check-square"></i>
        </button>
      </td>
      <td className=" whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => handleReject(data._id)}
          className="bg-red-100 px-3 py-1 rounded text-red-600 hover:text-red-800"
        >
          <i className="bi bi-x-square"></i>
        </button>
      </td>
    </tr>
  );
};

const DocumentsTable = () => {
  const documents = useSelector(state => state.documents.documents);
  console.log(documents);

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="font-medium text-2xl">Documents</h2>
      <div className="shadow overflow-x-auto rounded-md">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <TableHeader title="Title" />
              <TableHeader title="Subject" />
              <TableHeader title="By" />
              <TableHeader title="File" />
              <th
                scope="col"
                className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                <span>status</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {documents &&
              documents.map((d, i) => {
                return <TableRow key={i} data={d} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentsTable;
