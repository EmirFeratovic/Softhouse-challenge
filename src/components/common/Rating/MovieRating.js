import * as React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function MovieRating(value) {
  console.log(value);
  return (
    <div
      style={{
        width: 175,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Rating
        value={value.value / 2}
        readOnly
        precision={0.1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
      />
    </div>
  );
}
