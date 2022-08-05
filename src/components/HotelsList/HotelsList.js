import React from "react";
import styles from "./HotelsList.module.scss";
import { ArrowIcon } from "../Icon";

function HotelsList() {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.containerTitle}>
          <h2 className={styles.hotelsTitle}>Отели</h2>
          <ArrowIcon
            style={{
              transform: "rotate(90deg)",
              fill: "#A7A7A7",
              width: "17px",
              height: "17px",
            }}
          />
          <h2>Отели</h2>
        </div>
        <h3></h3>
      </div>
      <div className={styles.images}></div>
    </div>
  );
}

export default HotelsList;
