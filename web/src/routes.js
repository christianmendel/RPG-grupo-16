import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Loja from "./pages/Loja";
import Pvp from "./pages/Pvp";
import Missao from "./pages/Missao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Routes>
        <Route path="/loja" element={<Loja />} />
      </Routes>
      <Routes>
        <Route path="/pvp" element={<Pvp />} />
      </Routes>
      <Routes>
        <Route path="/missao" element={<Missao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
