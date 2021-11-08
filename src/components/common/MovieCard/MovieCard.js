import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./MovieCard.css";
import { MoviesContext } from "../../../App";
import MovieRating from "../Rating/MovieRating";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieCard({
  title,
  poster_path,
  overview,
  release_date,
  id,
  liked,
  vote_average,
}) {
  const [expanded, setExpanded] = useState(false);
  const { setMovies, movies } = useContext(MoviesContext);

  const toggleLike = () => {
    setMovies(
      movies.map((movie) => {
        if (movie.id === id) movie.liked = !movie.liked;
        return movie;
      })
    );
  };

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = release_date.split("-");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 300 }} id="singleMovieCard">
      <CardHeader
        title={title}
        subheader={months[parseInt(date[1])] + " " + date[2] + ", " + date[0]}
        style={{ height: 100, margin: 10, padding: 0 }}
      />
      <CardMedia
        component="img"
        image={"https://image.tmdb.org/t/p/original" + poster_path}
        alt="Movie poster"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={toggleLike}>
          <FavoriteIcon color={liked ? "secondary" : "primary"} />
        </IconButton>
        <CardContent style={{ textAlign: "center" }}>
          <MovieRating value={vote_average} key={id} />
        </CardContent>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body1" color="text.primary">
            {overview}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
