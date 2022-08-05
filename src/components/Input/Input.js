import React from "react";
import styles from "./Input.module.scss";

function Input(props) {
  return (
    <div className={styles.container}>
      <label style={{ fontWeight: props.fontWeight }}>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.hint}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        maxLength={props.maxLength}
      />
      {props.error ? <p>{props.error}</p> : null}
    </div>
  );
}

export default Input;
