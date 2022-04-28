import { Routes, Route } from "react-router-dom";
import Admin from "../admin/Admin";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
