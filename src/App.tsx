import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PATH } from "consts";
import { DocumentsScreen, HomeScreen } from "screens";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.DOCUMENTS} element={<DocumentsScreen />} />
        <Route path={PATH.HOME} element={<HomeScreen />} />
        <Route path={PATH.NOT_FOUND} element={<Navigate to={PATH.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
};
