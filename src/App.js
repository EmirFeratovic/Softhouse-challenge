import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./logo.svg";
import "./App.css";
import MainPage from "./components/pages/MainPage";
import MovieService from "./services/MovieService";
import FavoritesPage from "./components/pages/FavoritesPage";

export const MoviesContext = React.createContext([]);

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    MovieService.getMovies().then((data) => {
      setMovies(data.results);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MoviesContext.Provider value={{ movies, setMovies, loading, setLoading }}>
      <Router>
        <Routes>
          <Route element={<MainPage loading={loading} />} />
          <Route
            exact
            path={"/home"}
            element={<MainPage loading={loading} />}
          />
          <Route exact path={"/"} element={<MainPage loading={loading} />} />
          <Route
            exact
            path="/favorites"
            element={<FavoritesPage loading={loading} />}
          />
        </Routes>
      </Router>
    </MoviesContext.Provider>
  );
}

export default App;
