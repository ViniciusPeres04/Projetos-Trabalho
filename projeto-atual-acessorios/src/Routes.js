import React from "react";
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Produtos from "./pages/Produtos";
import FaleConosco from "./pages/FaleConosco";
import SobreNos from "./pages/SobreNos";

export default function Rotas() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/produtos" element={<Produtos />} />
            <Route exact path="/sobre-nos" element={<SobreNos />} />
            <Route exact path="/fale-conosco" element={<FaleConosco />} />
        </Routes>
    )
}