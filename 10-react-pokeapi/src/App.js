import "./App.css";

import { Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Pokemons from "./pages/Pokemons";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index path="/" element={<Inicio/>}/>
          <Route path="/pokemons" element={<Pokemons/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
