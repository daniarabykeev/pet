import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductsContext from "./contexts/ProductsContext";
import Notify from "./components/Notify";
import CartContext from "./contexts/CartContext";
import AuthContext from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductsContext>
      <CartContext>
        <AuthContext>
          <App />
        </AuthContext>
      </CartContext>
      <Notify />
    </ProductsContext>
  </BrowserRouter>
);
