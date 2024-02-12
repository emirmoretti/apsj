import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import RequireAuth from "./contexts/require-auth";
import FormPost from "./pages/admin/FormPost";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import News from "./pages/News";
import New from "./pages/New";


function App() {
  AOS.init();
  const location = useLocation();
  return (
    <main className="App">
      <NavComponent />
      <ScrollToTop>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/oraciones" element={<Oraciones />}></Route>
          <Route path="/llamados" element={<Llamados />}></Route>
          <Route path="/devocion" element={<Devocion />}></Route>
          <Route path="/consagracion" element={<Consagracion />}></Route>
          <Route path="/contacto" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/noticias" element={<News />}></Route>
          <Route path="/noticias/:id" element={<New />}></Route>
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
          </Route>
          <Route path="/form-post" element={
            <RequireAuth>
              <FormPost />
            </RequireAuth>
          } >
            <Route path="/form-post/:id" element={
              <RequireAuth>
                <FormPost />
              </RequireAuth>
            } />
          </Route>
        </Routes>

      </ScrollToTop>
      <Footer />
      <ToastContainer />
    </main>
  );
}

export default App;
