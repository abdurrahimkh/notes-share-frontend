import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../redux/features/document/documentAction";

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
      <td className="px-6 py-4 whitespace-nowrap text-sm">{data.name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">{data.email}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">{data.username}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => handleDelete(data._id)}
          className="bg-red-100 px-3 py-2 rounded text-red-600 hover:text-red-800"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

const UsersTable = () => {
  const users = useSelector(state => state.documents.users);

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="font-medium text-2xl">Users</h2>
      <div className="shadow overflow-x-auto rounded-md">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <TableHeader title="Name" />
              <TableHeader title="Email" />
              <TableHeader title="Username" />
              <th
                scope="col"
                className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                <span></span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {users &&
              users.map((d, i) => {
                return <TableRow key={i} data={d} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
