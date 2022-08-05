import React from "react";
import styles from "./HotelsPage.module.scss";
import SearchForm from "../../components/SearchForm";
import Header from "../../components/Header/Header";
import Favorites from "../../components/Favorites";
import HotelsList from "../../components/HotelsList/HotelsList";

function HotelsPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <SearchForm />
          <Favorites />
        </div>
        <HotelsList />
      </div>
    </>
  );
}

export default HotelsPage;
