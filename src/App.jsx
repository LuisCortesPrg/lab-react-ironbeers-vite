import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerpage from "./pages/AddBeerPage";    

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Link to="/beers">Todas las cervezas</Link>
      <Link to="/random-beer">Cerveza aleatoria</Link>
      <Link to="/new-beer">Nueva Cerveza</Link> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerpage />} />
        {/* <Route path="/search?q={query}" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
