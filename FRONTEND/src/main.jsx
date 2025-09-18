import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./dashboard/index";
import DataValidation from "./data_validation/index";
import InstallmentCars from "./installment/index";
import InstallmentShow from "./installment/show";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/data-validation" element={<DataValidation />} />
        <Route path="/dashboard/installment" element={<InstallmentCars />} />
        <Route
          path="/dashboard/installment/show"
          element={<InstallmentShow />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
