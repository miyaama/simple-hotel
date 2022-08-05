import React from "react";
import styles from "./SearchForm.module.scss";
import Input from "../Input";
import Button from "../Button/Button";

function SearchForm() {
  return (
    <div className={styles.container}>
      <Input type="text" label="Локация" fontWeight="500" />
      <Input type="date" label="Дата заселения" fontWeight="500" />
      <Input type="number" label="Количество дней" fontWeight="500" />
      <Button >Войти</Button>
    </div>
  );
}

export default SearchForm;
