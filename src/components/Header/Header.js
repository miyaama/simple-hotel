import React from "react";
import styles from "./Header.module.scss";
import { LogoutIcon } from "../Icon";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <h2>Simple Hotel Check</h2>
      <div className={styles.logoutContainer}>
        <Link to="/">
          <h4>Выйти</h4>
        </Link>
        <Link to="/" className={styles.imgLink}>
          <LogoutIcon />
        </Link>
      </div>
    </div>
  );
}

export default Header;
