import React, { useState, useEffect } from "react";
import "../logo.svg";
import "./MainPage.css";
import NavBar from "./common/NavBar/NavBar";
import Loader from "./common/Loader/Loader";
import MovieService from "../services/MovieService";
import MovieCard from "./common/MovieCard/MovieCard";

function MainPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = () => {
    MovieService.getMovies().then((movies) => {
      setData(movies.results);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
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
            {data &&
              data.map((movie) => <MovieCard {...movie} key={movie.id} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
