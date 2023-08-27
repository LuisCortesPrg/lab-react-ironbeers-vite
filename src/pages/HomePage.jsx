import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import AllBeersPage from "./AllBeersPage";
import RandomBeerPage from "./RandomBeerPage";
import AddBeerpage from "./AddBeerPage";   
import Navbar from "../components/Navbar";


function HomePage() {
  return (
    <div>
      <Link to="/beers">Todas las cervezas</Link>
      <br />
      <Link to="/random-beer">Cerveza aleatoria</Link>
      <br />
      <Link to="/new-beer">Nueva Cerveza</Link>
      <br />

      {/* <Routes>
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerpage />} />
      </Routes> */}
    </div>
  );
}

export default HomePage;
