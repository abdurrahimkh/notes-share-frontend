import { Routes, Route } from "react-router-dom";
import Admin from "../admin/Admin";
import Home from "../home/Home";
import Login from "../login/Login";
import EmailRegister from "../register/EmailRegister";
import Register from "../register/Register";

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user/register" element={<EmailRegister />} />
        <Route path="/" element={<Home />} />
        <Route path="/user/step" element={<Register />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
