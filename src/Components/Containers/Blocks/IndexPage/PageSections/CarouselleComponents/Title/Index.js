import React from "react";
import classes from "./Index.css";

export default function Title(props) {
  return <h1 className={classes.Container}>{props.children}</h1>;
}
