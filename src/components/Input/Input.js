import React from "react";

import styles from "./Input.module.scss";

function Input(props) {
  return (
    <div className={styles.container}>
      <label
        style={{ fontWeight: props.fontWeight }}
        className={props.error ? styles.error : ""}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.hint}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        maxLength={props.maxLength}
        min={props.min}
        className={props.error ? styles.error : ""}
        max={props.max}
      />
      {props.error ? <p>{props.error}</p> : null}
    </div>
  );
}

export default Input;
