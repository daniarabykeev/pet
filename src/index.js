import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductsContext from "./contexts/ProductsContext";
import Notify from "./components/Notify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductsContext>
      <App />
      <Notify />
    </ProductsContext>
  </BrowserRouter>
);
