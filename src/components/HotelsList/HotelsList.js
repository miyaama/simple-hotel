import React from "react";
import { useSelector } from "react-redux";

import styles from "./HotelsList.module.scss";
import { TabIcon } from "../Icon";
import HotelCard from "../HotelCard";
import Carousel from "../Carousel";

function HotelsList() {
  const hotels = useSelector((state) => state.hotels.hotels);
  const favoriteHotelsLength = useSelector(
    (state) => state.hotels.favoriteHotels.ids.length
  );

  const {
    city = "",
    dateIn,
    amountOfDays,
  } = useSelector((state) => state.hotels.searchParams);

  const month = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  let date = dateIn ? new Date(Date.parse(dateIn)) : new Date();
  let arrivalDate =
    date.getDate().toString().padStart(2) +
    " " +
    month[date.getMonth()] +
    " " +
    date.getFullYear();

  return (
    <div className={styles.container}>
      <>
        <div className={styles.containerHeader}>
          <div className={styles.containerTitle}>
            <h2 className={styles.hotelsTitle}>Отели</h2>
            <div className={styles.tabIcon}>
              <TabIcon />
            </div>
            <h2 className={styles.city}>{city}</h2>
          </div>
          <h3>{arrivalDate}</h3>
        </div>
        <Carousel />
        <div className={styles.favorite}>
          <p className={styles.favTitle}>Добавлено в Избранное:</p>
          <p className={styles.amountFavHotels}>{favoriteHotelsLength}</p>
          <p className={styles.favTitle}>отелей</p>
        </div>
        <div className={styles.hotelsContainer}>
          {hotels.length ? (
            hotels.map((hotel) => (
              <div key={hotel.hotelId}>
                <div className={styles.hotelCard}>
                  <HotelCard
                    key={hotel.hotelId}
                    hotel={hotel}
                    arrivalDate={arrivalDate}
                    amountOfDays={amountOfDays}
                    hotelCardStyle="hotelCardStyle"
                  />
                </div>
                <hr></hr>
              </div>
            ))
          ) : (
            <p className={styles.empty}>Ничего не найдено</p>
          )}{" "}
        </div>
      </>
    </div>
  );
}

export default HotelsList;
