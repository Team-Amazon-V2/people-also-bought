import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RelatedProducts from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("people-also-bought"));
root.render(
   <React.StrictMode>
      <RelatedProducts />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
