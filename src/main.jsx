import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import RQProvider from "./providers/RQProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RQProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </RQProvider>
  </React.StrictMode>
);
