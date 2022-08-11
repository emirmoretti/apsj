import NavComponent from "./components/nav/NavComponent";
import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <main className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </main>
  );
}

export default App;
