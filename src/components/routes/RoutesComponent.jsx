import { Routes, Route } from "react-router-dom";
import Dashboard from "../admin/dashboard/Dashboard";
import Forms from "../admin/forms/Forms";
import Tables from "../admin/tables/Tables";
// import AdminLogin from "../admin/login/AdminLogin";
// import AdminPanel from "../admin/panel/AdminPanel";
import Upload from "../document/Upload";
import CompleteRegistration from "../google-signin/CompleteRegistration";
import Home from "../home/Home";
import Login from "../login/Login";
import EmailRegister from "../register/EmailRegister";
import Register from "../register/Register";
// import AdminLayout from "./AdminLayout";
import Layout from "./Layout";
import NotFound from "./NotFound";

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
          <Route path="/document/upload" element={<Upload />} />
          <Route
            path="/user/complete/registration"
            element={<CompleteRegistration />}
          />
        </Route>
        {/* <Route path="/admin" element={<AdminLogin />} />
         />
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route> */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/forms" element={<Forms />} />

        <Route path="/tables" element={<Tables />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
