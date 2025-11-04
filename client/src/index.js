import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BookContextProvider } from "./context/bookContext";
import { AuthContextProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/cartContext"; // ✅ import it

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BookContextProvider>
      <CartContextProvider> {/* ✅ wrap App with CartContextProvider */}
        <App />
      </CartContextProvider>
    </BookContextProvider>
  </AuthContextProvider>
);
