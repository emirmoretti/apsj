import { Routes, Route } from "react-router-dom";
import NavComponent from "./components/nav/NavComponent";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Oraciones from "./pages/Oraciones";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.scss";

function App() {
  AOS.init();
  return (
    <main className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/oraciones" element={<Oraciones/>}></Route>
        <Route path="/contacto" element={<Contact />}></Route>
      </Routes>
    </main>
  );
}

export default App;
