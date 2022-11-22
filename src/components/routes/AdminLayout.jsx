import { Outlet } from "react-router-dom";
import AdminPanel from "../admin/panel/AdminPanel";
const AdminLayout = () => {
  return (
    <>
      <AdminPanel />
      <Outlet />
    </>
  );
};

export default AdminLayout;
