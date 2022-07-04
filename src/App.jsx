import React from "react";
import Admin from "./components/admin/Admin";
import Navbar from "./components/navbar/Navbar";
import RoutesComponent from "./components/routes/RoutesComponent";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <RoutesComponent />
    </div>
  );
};

export default App;
