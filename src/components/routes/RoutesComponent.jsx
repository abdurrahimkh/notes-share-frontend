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
import ForgetPassword from "../login/ForgetPassword";
import NewPassword from "../login/NewPassword";
import Profile from "../profile/Profile";
import FrontPage from "../home/FrontPage";

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
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/forgetpassword/:token" element={<NewPassword />} />
          <Route path="/dashboard/user/profile/:id" element={<Profile />} />
          <Route path="/fpage" element={<FrontPage />} />
          <Route
            path="/user/complete/registration"
            element={<CompleteRegistration />}
          />

          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/document/upload" element={<Upload />} />
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLogin />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/documents" element={<Documents />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RoutesComponent;
