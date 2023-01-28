import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { PaginaInicial } from "./pages/PaginaInicial";
import { Cardapio } from "./pages/Cardapio";
import { Login } from "./pages/Login";
import { GerenciamentoMesas } from "./pages/GerenciamentoMesas";
import { Item } from "./pages/Item";
import { Ajuda } from "./pages/Ajuda";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/gerenciamentomesas" element={<GerenciamentoMesas />} />
                <Route path="/item" element={<Item />} />
                <Route path="/ajuda" element={<Ajuda />} />
            </Routes>
        </Router>
    )
}
