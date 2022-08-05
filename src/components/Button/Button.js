import React from "react";
import styles from "./Button.module.scss";

function Button(props) {
  return (
    <button className={props.class} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
