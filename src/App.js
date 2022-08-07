import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import HotelsPage from "./pages/HotelsPage/HotelsPage";
import { getAuthFromLocalStorage } from "./localStorage";
import styles from "./App.module.scss";
import { loginTrue } from "./store/reducers";

function App() {
  const dispatch = useDispatch();
  const isAuth = getAuthFromLocalStorage();

  if (isAuth) {
    dispatch(loginTrue());
  }

  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<AuthorizationPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
      </Routes>
    </div>
  );
}

export default App;
