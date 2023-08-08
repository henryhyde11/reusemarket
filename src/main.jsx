import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { CarListContextProvider } from "./context/CarList";

import { ProductContextProvider } from "./context/Product";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <CarListContextProvider>
          <App />
        </CarListContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
