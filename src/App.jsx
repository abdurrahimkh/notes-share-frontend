import React from "react";
import Admin from "./components/admin/Admin";
import Navbar from "./components/navbar/Navbar";
import RoutesComponent from "./components/routes/RoutesComponent";
const App = () => {
  return (
    <div>
      <Navbar />
      <RoutesComponent />
    </div>
  );
};

export default App;
