import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getHotels } from "../../store/reducers";
import styles from "./SearchForm.module.scss";
import Input from "../Input";
import Button from "../Button/Button";
import { getFormattedDate } from "../../utils";

const today = new Date().toISOString().split("T")[0];

function SearchForm() {
  const dispatch = useDispatch();

  const [city, setCity] = useState("Москва");
  const [date, setDate] = useState(today);
  const [amountOfDays, setAmountOfDays] = useState(1);

  const onChangeCity = (event) => {
    setCity(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangeAmountOfDays = (event) => {
    setAmountOfDays(+event.target.value || 1);
  };

  const fetchHotels = () => {
    dispatch(getHotels({ city, date, amountOfDays }));
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div className={styles.container}>
      <Input
        type="text"
        label="Локация"
        fontWeight="500"
        value={city}
        onChange={onChangeCity}
        maxLength="50"
      />
      <Input
        type="date"
        label="Дата заселения"
        fontWeight="500"
        value={date}
        onChange={onChangeDate}
        min={getFormattedDate()}
      />
      <Input
        type="number"
        label="Количество дней"
        fontWeight="500"
        value={amountOfDays}
        onChange={onChangeAmountOfDays}
        max="365"
        min="1"
      />
      <Button onClick={fetchHotels}>Искать</Button>
    </div>
  );
}

export default SearchForm;
