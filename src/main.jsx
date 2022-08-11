import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "bootstrap-icons/font/bootstrap-icons.css";
import Test from "./Test";
import FrontPage from "./components/home/front-page/FrontPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <FrontPage />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
