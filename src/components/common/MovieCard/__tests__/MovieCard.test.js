import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "../MovieCard";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("MovieCard suite", () => {
  test("renders snapshot", () => {
    const tree = renderer
      .create(
        <MovieCard
          title={"Batman"}
          id={1}
          liked={true}
          overview={"Betmen the movie"}
          poster_path={""}
          release_date={"2001-02-02"}
          vote_average={7.8}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("expand overview", async () => {
    render(
      <MovieCard
        title={"Batman"}
        id={1}
        liked={true}
        overview={"Betmen the movie"}
        poster_path={""}
        release_date={"2001-02-02"}
        vote_average={7.8}
      />
    );

    const expandIcon = screen.getByTestId("expand-icon");
    expect(expandIcon).toBeInTheDocument();

    fireEvent.click(expandIcon);
    await waitFor(() => {
      expect(screen.getByText("Betmen the movie")).toBeInTheDocument();
    });
  });
});
