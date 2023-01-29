import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { PaginaInicial } from "./pages/PaginaInicial/PaginaInicial";
import { Cardapio } from "./pages/Cardapio/Cardapio";
import { GerenciamentoMesas } from "./pages/GerenciamentoMesas/GerenciamentoMesas";
import { Item } from "./pages/Item/Item";
import { Ajuda } from "./pages/Ajuda/Ajuda";
import { Login } from "./pages/Login/Login";

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
