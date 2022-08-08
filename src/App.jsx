import NavComponent from "./components/nav/NavComponent";
import './App.scss'
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

function App() {
  return (
    <main className="App">
      <NavComponent/>
      <Hero/>
      <About/>
    </main>
  );
}

export default App;
