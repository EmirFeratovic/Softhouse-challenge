import React, { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";
import { ReactComponent as Logo } from "../../../logo.svg";
import "../../../logo.svg";
import "./Loader.css";

function Loader(props) {
  return (
    <div className="loader">
      <GridLoader color={"#2e9cca"} loading={props.loading} size={12} />
    </div>
  );
}

export default Loader;
