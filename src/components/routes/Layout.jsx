import { Outlet } from "react-router-dom";
import Footer from "../home/front-page/Footer";
import Navbar from "../navbar/Navbar";
import NavbarTest from "../navbar/NavbarTest";
const Layout = () => {
  return (
    <>
      <NavbarTest />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
