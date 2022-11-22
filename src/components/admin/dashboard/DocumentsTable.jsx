import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  approve,
  deleteDocument,
  fetchDocuments,
  reject,
} from "../../../redux/features/document/documentAction";
import LoaderSm from "../../loader/LoaderSm";
import DocumentsPagination from "./Pagination/DocumentsPagination";
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

//Function for render Table

const TableRow = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let statusClass = " bg-green-100 text-green-700";
  if (data.status === "rejected") {
    statusClass = " bg-red-100 text-red-700";
  } else if (data.status === "pending") {
    statusClass = " bg-blue-100 text-blue-700";
  }

  // Function For Approval
  const handleApprove = id => {
    dispatch(approve(id));
  };

  // Function For Approval
  const handleReject = id => {
    dispatch(reject(id));
  };

  const handleDelete = id => {
    dispatch(deleteDocument(id));
  };
  return (
    <tr>
      <td className="whitespace-nowrap px-3 py-4 text-sm">{data.title}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm">{data.subject}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm">
        <div className="tooltip" data-tip={data.postedBy.email}>
          {data.postedBy.name}
        </div>
      </td>
      <td>
        <div
          onClick={() => navigate("/admin/doc", { state: { url: data?.url } })}
          className="flex justify-center  hover:border hover:bg-gray-50"
        >
          <i className="bi bi-file-earmark-text mr-1"></i>
          <button className="" target="_blank">
            File
          </button>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm">
        {data.createdAt.slice(0, -8)}
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span
          className={
            "rounded-full px-2 py-1 text-sm font-medium capitalize" +
            statusClass
          }
        >
          {data.status}
        </span>
      </td>
      <td className=" whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => handleApprove(data._id)}
          className="rounded bg-green-100 px-3 py-1 text-green-600 hover:text-green-800"
        >
          <i className="bi bi-check-square"></i>
        </button>
      </td>
      <td className=" whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => handleReject(data._id)}
          className="rounded bg-red-100 px-3 py-1 text-red-600 hover:text-red-800"
        >
          <i className="bi bi-x-square"></i>
        </button>
      </td>
      <td
        onClick={() => handleDelete(data._id)}
        className=" whitespace-nowrap text-sm font-medium"
      >
        <button className="rounded bg-gray-600 px-3 py-1 text-white  ">
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

const DocumentsTable = () => {
  const { documents, approveLoading, rejectLoading, deleteLoading } =
    useSelector(state => state.documents);

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-2xl font-medium">Documents</h2>
      <div className="overflow-x-auto rounded-md shadow">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <TableHeader title="Title" />
              <TableHeader title="Subject" />
              <TableHeader title="By" />
              <TableHeader title="File" />
              <TableHeader title="Uploaded At" />
              <th
                scope="col"
                className="relative px-6 py-3 text-left text-xs font-medium uppercase text-gray-500"
              >
                <span>status</span>
              </th>
              <th>{approveLoading && <LoaderSm />}</th>
              <th>{rejectLoading && <LoaderSm />}</th>
              <th>{deleteLoading && <LoaderSm />}</th>
            </tr>
          </thead>
          <tbody className="divide-y bg-white">
            {documents &&
              documents.map((d, i) => {
                return <TableRow key={i} data={d} />;
              })}
          </tbody>
        </table>
        <DocumentsPagination />
      </div>
    </div>
  );
};

export default DocumentsTable;
