import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Atividades from "./pages/Atividades";
import Eventos from "./pages/Eventos";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atividades" element={<Atividades />} />
        <Route path="/eventos" element={<Eventos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
