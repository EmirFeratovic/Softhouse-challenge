import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../logo.svg";
function NavBar() {
  return (
    <div id={"navBar"}>
      <div id={"pageName"}>
        <Logo />
        <h1 style={{ paddingLeft: 10, color: "#AAABB8" }}>PopularMovies</h1>
      </div>
      <ul id={"list"}>
        <li>
          <Link
            to="/home"
            style={{
              color: "#AAABB8",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            style={{
              color: "#AAABB8",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            FAVOURITE MOVIES
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
