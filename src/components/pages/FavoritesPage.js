import React, { useContext } from "react";
import "../../logo.svg";
import "./FavoritesPage.css";
import NavBar from "../common/NavBar/NavBar";
import Loader from "../common/Loader/Loader";
import MovieCard from "../common/MovieCard/MovieCard";
import { MoviesContext } from "../../App";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { fileSave } from "browser-fs-access";
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

function FavoritesPage({ loading }) {
  const handleSave = () => {
    fileSave(
      new Blob(
        [
          JSON.stringify(
            movies
              .filter((movie) => movie.liked)
              .map((movie) => ({
                title: movie.title,
                release_date: movie.release_date,
              })),
            null,
            2
          ),
        ],
        { type: "application/json" }
      ),
      {
        fileName: "movies.json",
        extensions: [".json"],
      }
    );
  };
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
          <div id="scrollMenu">
            <ScrollMenu>
              {movies &&
                movies
                  .filter((movie) => movie.liked)
                  .map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </ScrollMenu>
            <div id="downloadButton">
              <Button
                variant={"primary"}
                startIcon={<SaveIcon />}
                style={{
                  backgroundColor: "#2E9CCA",
                }}
                onClick={handleSave}
              >
                Save favorites
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
