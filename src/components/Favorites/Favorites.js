import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { sortFavoriteHotels } from "../../store/reducers";
import styles from "./Favorites.module.scss";
import { ArrowIcon } from "../Icon";
import HotelCard from "../HotelCard";

const DEFAULT_SORT = 0;
const UP_SORT = 1;
const DOWN_SORT = 2;

function Favorites() {
  const [sortStars, setSortStars] = useState(DEFAULT_SORT);
  const [sortPrice, setSortPrice] = useState(DEFAULT_SORT);

  const dispatch = useDispatch();

  const favoriteHotels = useSelector(
    (store) => store.hotels.favoriteHotels.list
  );
  const favoriteHotelsIds = useSelector(
    (store) => store.hotels.favoriteHotels.ids
  );

  const onSortFavoriteHotels = (type) => {
    let newSort;

    if (type === "priceFrom") {
      newSort = sortPrice === UP_SORT ? DOWN_SORT : UP_SORT;
      setSortPrice(newSort);
      setSortStars(DEFAULT_SORT);
    }
    if (type === "stars") {
      newSort = sortStars === UP_SORT ? DOWN_SORT : UP_SORT;
      setSortStars(newSort);
      setSortPrice(DEFAULT_SORT);
    }
    dispatch(sortFavoriteHotels({ type, isUpSort: newSort === UP_SORT }));
  };

  useEffect(() => {
    setSortPrice(0);
    setSortStars(0);
  }, [favoriteHotels]);

  return (
    <div className={styles.container}>
      <h2>Избранное</h2>
      {favoriteHotelsIds.length ? (
        <>
          <div className={styles.filterContainer}>
            <div
              className={`${styles.filter} ${sortStars && styles.activeFilter}`}
              onClick={() => onSortFavoriteHotels("stars")}
            >
              <p className={sortStars !== DEFAULT_SORT ? styles.active : "" }>Рейтинг</p>
              <div className={styles.arrowContainer}>
                <ArrowIcon
                  style={{ transform: "rotate(180deg)" }}
                  isActive={sortStars === UP_SORT}
                />
                <ArrowIcon isActive={sortStars === DOWN_SORT} />
              </div>
            </div>
            <div
              className={`${styles.filter} ${sortPrice && styles.activeFilter}`}
              onClick={() => onSortFavoriteHotels("priceFrom")}
            >
              <p className={sortPrice !== DEFAULT_SORT ? styles.active : "" }>Цена</p>
              <div className={styles.arrowContainer}>
                <ArrowIcon
                  style={{ transform: "rotate(180deg)" }}
                  isActive={sortPrice === UP_SORT}
                />
                <ArrowIcon style={{}} isActive={sortPrice === DOWN_SORT} />
              </div>
            </div>
          </div>
          {favoriteHotelsIds.map((id) => {
            const hotel = favoriteHotels[id];

            return (
              <>
              <HotelCard
                key={hotel.hotelId}
                hotel={hotel}
                amountOfDays={hotel.amountOfDays}
                arrivalDate={hotel.arrivalDate}
              />
              <hr></hr>
              </>
            );
          })}
        </>
      ) : (
        <p className={styles.emptyList}>Список пуст</p>
      )}
    </div>
  );
}

export default Favorites;
