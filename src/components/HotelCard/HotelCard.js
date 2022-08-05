import React from "react";
import styles from "./HotelCard.module.scss";

function HotelCard() {
  return (
    <div className={styles.container}>
      <div>
        <h4 className={styles.hotelName}>Moscow Marriott Grand Hotel</h4>
        <img></img>
      </div>
      <div>
        <h6 className={styles.hotelDate}></h6>
        <h6 className={styles.hotelDate}>-</h6>
        <h6 className={styles.hotelDate}></h6>
      </div>
      <div>
        <div></div>
        <div className={styles.hotelPrice}>
          <p> className={styles.hotelPriceTitle}</p>
          <p className={styles.hotelPriceValue}></p>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
