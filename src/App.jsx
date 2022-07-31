import React from "react";
import RoutesComponent from "./components/routes/RoutesComponent";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <RoutesComponent />
    </div>
  );
};

export default App;
