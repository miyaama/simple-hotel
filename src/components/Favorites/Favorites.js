import React from "react";
import styles from "./Favorites.module.scss";

import { ArrowIcon } from "../Icon";

function Favorites() {
  return (
    <div className={styles.container}>
      <h2>Избранное</h2>
      <div className={styles.filter}>
        <p>Рейтинг</p>
        <div className={styles.arrowContainer}>
          <ArrowIcon style={{ transform: "rotate(180deg)", fill: "#A7A7A7" }} />
          <ArrowIcon style={{ fill: "#A7A7A7" }}/>
        </div>
      </div>
      <div className={styles.filter}>
        <p>Цена</p>
        <div className={styles.arrowContainer}>
          <ArrowIcon style={{ transform: "rotate(180deg)", fill: "#A7A7A7" }} />
          <ArrowIcon style={{ fill: "#A7A7A7" }}/>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
