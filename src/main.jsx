import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Test from "./Test";

ReactDOM.render(
  <React.StrictMode>
    {/* <Test /> */}
    <BrowserRouter>
      <GoogleOAuthProvider clientId="159965697116-t8suhldq94ikeggogj0bevifgqbtcvjj.apps.googleusercontent.com">
        <Provider store={store}>
          <App />
        </Provider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
