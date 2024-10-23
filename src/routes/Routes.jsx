import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "../components/Button/Button";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/button" element={<Button />} />
      </Routes>
    </BrowserRouter>
  );
};
