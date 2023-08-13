import React from "react";
import classes from "./Index.css";

export default function Subtitle(props) {
  return <h2 className={classes.Container}>{props.children}</h2>;
}
