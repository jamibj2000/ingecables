import React from "react";
import classes from "./Index.css";

export default function Wrapper(props) {
  return <div className={classes.Container}>{props.children}</div>;
}
