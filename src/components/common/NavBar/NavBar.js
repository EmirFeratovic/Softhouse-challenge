import React from "react";
import "./NavBar.css";
import { ReactComponent as Logo } from "../../../logo.svg";
function NavBar() {
  return (
    <div id={"navBar"}>
      <div id={"pageName"}>
        <Logo />
        <h1 style={{ paddingLeft: 10 }}>PopularMovies</h1>
      </div>
      <ul id={"list"}>
        <li>Home</li>
        <li>Popular movies</li>
        <li>Categories</li>
        <li>My movies</li>
      </ul>
    </div>
  );
}

export default NavBar;
