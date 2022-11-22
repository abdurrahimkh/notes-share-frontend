import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../redux/features/document/documentAction";
import LoaderSm from "../../loader/LoaderSm";
import UsersPagination from "./Pagination/UsersPagination";

const TableHeader = ({ title }) => {
  return (
    <th
      scope="col"
      className="px-6 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
    >
      {title}
    </th>
  );
};

//Function for render Table

const TableRow = ({ data }) => {
  const dispatch = useDispatch();

  let statusClass = " bg-green-100 text-green-700";
  if (data.status === "rejected") {
    statusClass = " bg-red-100 text-red-700";
  } else if (data.status === "approved") {
    statusClass = " bg-blue-100 text-blue-700";
  }
  const handleDelete = id => {
    dispatch(deleteUser(id));
  };
  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-3 text-sm">{data.name}</td>
      <td className="whitespace-nowrap px-6 py-3 text-sm">{data.email}</td>
      <td className="whitespace-nowrap px-6 py-3 text-sm">{data.username}</td>
      <td className="whitespace-nowrap px-6 py-3 text-sm">
        {data.createdAt.slice(0, -8)}
      </td>
      <td className="whitespace-nowrap px-6 py-3 text-sm font-medium">
        <button
          onClick={() => handleDelete(data._id)}
          className="rounded bg-red-100 px-3 py-2 text-red-600 hover:text-red-800"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

const UsersTable = () => {
  const { users, deleteUserLoading } = useSelector(state => state.documents);

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-2xl font-medium">Users</h2>
      <div className="overflow-x-auto rounded-md shadow">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <TableHeader title="Name" />
              <TableHeader title="Email" />
              <TableHeader title="Username" />
              <TableHeader title="Created At" />
              <th
                scope="col"
                className="relative px-6 py-2 text-left text-xs font-medium uppercase text-gray-500"
              >
                <span>{deleteUserLoading && <LoaderSm />}</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y bg-white">
            {users &&
              users.map((d, i) => {
                return <TableRow key={i} data={d} />;
              })}
          </tbody>
        </table>
        <UsersPagination />
      </div>
    </div>
  );
};

export default UsersTable;
