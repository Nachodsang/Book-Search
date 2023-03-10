import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

// import context providers
import BookProvider from "./context/BookContext";
import NavProvider from "./context/NavContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BookProvider>
    <NavProvider>
      <App />
    </NavProvider>
  </BookProvider>
);
