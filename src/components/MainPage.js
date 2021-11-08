import React, { useContext } from "react";
import "../logo.svg";
import "./MainPage.css";
import NavBar from "./common/NavBar/NavBar";
import Loader from "./common/Loader/Loader";
import MovieCard from "./common/MovieCard/MovieCard";
import { MoviesContext } from "../App";

function MainPage({ loading }) {
  const { movies } = useContext(MoviesContext);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <div className={"Loader"}>
          <Loader />
        </div>
      ) : (
        <div className="MainPage">
          <div>
            <NavBar />
          </div>
          <div style={{ padding: "100px", display: "flex", flexWrap: "wrap" }}>
            {movies &&
              movies.map((movie) => <MovieCard {...movie} key={movie.id} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
