import { Routes, Route } from "react-router-dom";
import Documents from "../admin/dashboard/Documents";
import Settings from "../admin/dashboard/Settings";
import Users from "../admin/dashboard/Users";
import AdminLogin from "../admin/login/AdminLogin";
import Upload from "../document/Upload";
import CompleteRegistration from "../google-signin/CompleteRegistration";
import Home from "../home/Home";
import Login from "../login/Login";
import EmailRegister from "../register/EmailRegister";
import Register from "../register/Register";
import Layout from "./Layout";
import ProtectedRoutes from "./ProtectedRoutes";
import NotFound from "./NotFound";
import Dashboard from "../dashboard/Dashboard";

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/user/step" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<EmailRegister />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/document/upload" element={<Upload />} />
          </Route>
          <Route
            path="/user/complete/registration"
            element={<CompleteRegistration />}
          />
        </Route>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/documents" element={<Documents />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
