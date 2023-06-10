import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import BlocContextProvider from "./Context/blocContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BlocContextProvider>
      <App />
    </BlocContextProvider>
  </React.StrictMode>
);
