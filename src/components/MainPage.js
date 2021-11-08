import React, { useContext } from "react";
import "../logo.svg";
import "./MainPage.css";
import NavBar from "./common/NavBar/NavBar";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
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
          <div style={{ marginTop: "10vh" }}>
            <ScrollMenu>
              {movies &&
                movies.map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </ScrollMenu>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
