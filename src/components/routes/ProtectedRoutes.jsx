import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = useSelector(state => state.auth.user);
  return user ? <Outlet /> : <Navigate to="/user/login" />;
};

export default ProtectedRoutes;
