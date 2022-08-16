import { Routes, Route, Router } from "react-router-dom";
import NavComponent from "./components/nav/NavComponent";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Oraciones from "./pages/Oraciones";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.scss";
import Consagracion from "./pages/Consagracion";
import Llamados from "./pages/Llamados";
import Devocion from "./pages/Devocion";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";

function App() {
  AOS.init();
  return (
    <main className="App">
      <NavComponent />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/oraciones" element={<Oraciones />}></Route>
          <Route path="/llamados" element={<Llamados />}></Route>
          <Route path="/devocion" element={<Devocion />}></Route>
          <Route path="/consagracion" element={<Consagracion />}></Route>
          <Route path="/contacto" element={<Contact />}></Route>
        </Routes>
      </ScrollToTop>
      <Footer />
    </main>
  );
}

export default App;
