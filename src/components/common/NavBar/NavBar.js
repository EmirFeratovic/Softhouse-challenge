import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../logo.svg";
import TextField from "@mui/material/TextField";
import MovieService from "../../../services/MovieService";
import App, { MoviesContext } from "../../../App";

function NavBar() {
  const { movies, setMovies } = useContext(MoviesContext);
  const searchMovies = (searchTerm) => {
    MovieService.searchMovies(searchTerm).then((data) => {
      setMovies(
        data.results
          ? data.results.filter(
              (movie) => movie.release_date && movie.poster_path
            )
          : movies
      );
    });
  };

  return (
    <div id={"navBar"}>
      <div id={"pageName"}>
        <Logo />
        <h2 id="siteTitle">PopularMovies</h2>
      </div>
      <div id={"listDiv"}>
        <ul id={"list"}>
          <li className="buttons">
            <Link className={"links"} to={"/home"}>
              HOME
            </Link>
          </li>
          <li className="buttons">
            <Link className={"links"} to="/favorites">
              FAVOURITE MOVIES
            </Link>
          </li>
          <li>
            <TextField
              id="filled-search"
              label="Search"
              type="search"
              variant="filled"
              onChange={(event) => {
                searchMovies(event.target.value);
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
