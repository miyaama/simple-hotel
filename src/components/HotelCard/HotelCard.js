import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HotelCard.module.scss";

import Stars from "../Stars";
import { HeartIcon } from "../Icon";
import { HotelIcon } from "../Icon";
import { changeFavoriteHotel } from "../../store/reducers";

function HotelCard({ hotel, arrivalDate, amountOfDays, hotelCardStyle }) {
  const dispatch = useDispatch();

  const isFavorite = useSelector((state) =>
    state.hotels.favoriteHotels?.ids.includes(hotel.hotelId)
  );

  const onToggleFavoriteHotel = () => {
    dispatch(changeFavoriteHotel({ hotel, arrivalDate, amountOfDays }));
  };

  return (
    <div className={styles.containerHotelCard}>
      {hotelCardStyle ? (
        <div className={styles.hotelIcon}>
          <HotelIcon />
        </div>
      ) : null}

      <div className={styles.container}>
        <div className={styles.topContainer}>
          <h4 className={styles.hotelName}>{hotel.hotelName}</h4>
          <HeartIcon
            className={!isFavorite ? styles.heartIcon : null}
            isActive={isFavorite}
            onClick={onToggleFavoriteHotel}
          />
        </div>
        <div className={styles.hotelDateContainer}>
          <h6 className={styles.hotelDate}>{arrivalDate}</h6>
          <h6 className={styles.hotelDateSymbol}>—</h6>
          <h6 className={styles.hotelDate}>{`${amountOfDays} день`}</h6>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.stars}>
            <Stars amount={hotel.stars} />
          </div>
          <div className={styles.hotelPrice}>
            <p className={styles.hotelPriceTitle}>Price</p>
            <p className={styles.hotelPriceValue}>{`${hotel.priceFrom} ₽`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
