import { Routes, Route } from "react-router-dom";
import Documents from "../admin/dashboard/Documents";
import Settings from "../admin/dashboard/Settings";
import Users from "../admin/dashboard/Users";
import Values from "../admin/dashboard/Values";
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
import FrontPage from "../home/front-page/FrontPage";
import ContactUs from "../contact-us/ContactUs";
import ProfileSettings from "../profile/ProfileSettings";
import QuestionsList from "../Ask/QuestionsList";
import AskQuestion from "../Ask/AskQuestion";
import QuestionDetails from "../Ask/QuestionDetails";
import EachDocument from "../dashboard/EachDocument";
import AdminDoc from "../admin/template/AdminDoc";
const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route element={<Layout />}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/user/step" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<EmailRegister />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/forgetpassword/:token" element={<NewPassword />} />
          <Route path="/dashboard/user/profile/:id" element={<Profile />} />
          <Route path="/home/user/profile/:id" element={<Profile />} />
          <Route path="/fpage" element={<FrontPage />} />
          <Route
            path="/user/complete/registration"
            element={<CompleteRegistration />}
          />

          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/document/:id" element={<EachDocument />} />
            <Route path="/document/upload" element={<Upload />} />
            <Route path="/profile/settings" element={<ProfileSettings />} />
            <Route path="/questions/list" element={<QuestionsList />} />
            <Route path="/questions/ask" element={<AskQuestion />} />
            <Route
              path="questions/list/question/:id"
              element={<QuestionDetails />}
            />
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLogin />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/documents" element={<Documents />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/values" element={<Values />} />
          <Route path="/admin/doc" element={<AdminDoc />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RoutesComponent;
