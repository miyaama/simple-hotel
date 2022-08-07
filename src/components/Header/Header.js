import React from "react";
import { useDispatch } from "react-redux";

import styles from "./Header.module.scss";
import { LogoutIcon } from "../Icon";
import { loginFalse } from "../../store/reducers";

function Header() {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(loginFalse());
  };

  return (
    <div className={styles.container}>
      <h2>Simple Hotel Check</h2>
      <div className={styles.logoutContainer} onClick={onLogOut}>
        <h4>Выйти</h4>
        <LogoutIcon />
      </div>
    </div>
  );
}

export default Header;
