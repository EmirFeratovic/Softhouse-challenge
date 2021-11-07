import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./logo.svg";
import "./App.css";
import Loader from "./components/common/Loader/Loader";
import MainPage from "./components/MainPage";
import MovieCard from "./components/common/MovieCard/MovieCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/loader" element={<Loader />}></Route>
        <Route exact path="" element={<MainPage />}></Route>
        <Route exact path="/movie" element={<MovieCard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
