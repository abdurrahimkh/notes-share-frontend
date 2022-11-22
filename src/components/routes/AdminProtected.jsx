import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const AdminProtected = () => {
  const user = useSelector(state => state.auth.user);
  return user.role === admin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminProtected;
