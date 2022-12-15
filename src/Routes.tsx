import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  
  import { PaginaInicial } from "./pages/PaginaInicial";
  import { Cardapio } from "./pages/Cardapio";
  import { Login } from "./pages/Login";
  import { GerenciamentoMesas } from "./pages/GerenciamentoMesas";
  
  export function AppRoutes() {
      return (
          <Router>
              <Routes>
                  <Route path="/paginaInicial" element={<PaginaInicial />} />
                  <Route path="/cardapio" element={<Cardapio />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/gerenciamentomesas" element={<GerenciamentoMesas />} />
              </Routes>
          </Router>
      )
  }