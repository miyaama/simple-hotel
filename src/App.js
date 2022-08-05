import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDefaultHotels } from "./store/redusers/hotelsReduser";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import HotelsPage from "./pages/HotelsPage/HotelsPage";

import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.hotels);

  useEffect(() => {
    dispatch(getDefaultHotels());
  }, [dispatch]);

  console.log(hotels);

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
