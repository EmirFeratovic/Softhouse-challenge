import React, { useContext } from "react";
import "../logo.svg";
import "./FavoritesPage.css";
import NavBar from "./common/NavBar/NavBar";
import Loader from "./common/Loader/Loader";
import MovieCard from "./common/MovieCard/MovieCard";
import { MoviesContext } from "../App";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

function FavoritesPage({ loading }) {
  const { movies } = useContext(MoviesContext);
  return (
    <div>
      {loading ? (
        <div className={"Loader"}>
          <Loader />
        </div>
      ) : (
        <div className="FavoritesPage">
          <div>
            <NavBar />
          </div>
          <div style={{ marginTop: "10vh" }}>
            <ScrollMenu>
              {movies &&
                movies
                  .filter((movie) => movie.liked)
                  .map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </ScrollMenu>
          </div>
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
