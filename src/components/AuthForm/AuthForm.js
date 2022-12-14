import React, { useState } from "react";
import styles from "./AuthForm.module.scss";
import Input from "../Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { loginTrue } from "../../store/reducers/loginReducer";

function AuthForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
    errors: { email: "", password: "" },
  });

  const dispatch = useDispatch();

  const handleFormInput = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
      errors: {
        [e.target.name]: "",
      },
    }));
  };

  const handleSubmitForm = () => {
    let errors = {
      email: "",
      password: "",
      ...state.errors,
    };

    let isOk = true;

    // if (
    //   !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
    //     state.email.trim()
    //   )
    // ) {
    //   errors.email = "Неверный email";
    //   isOk = false;
    // }

    if (state.email.trim().length === 0) {
      errors.email = "Поле пустое";
      isOk = false;
    }

    // if (!/^[a-zA-Z]\w{7,}$/.test(state.password.trim())) {
    //   errors.password = "Неверный пароль";
    //   isOk = false;
    // }

    if (state.password.trim().length === 0) {
      errors.password = "Поле пустое";
      isOk = false;
    }

    setState((state) => ({ ...state, errors }));

    if (isOk) {
      dispatch(loginTrue());
    }
  };

  return (
    <div className={styles.container}>
      <h2>Simple Hotel Check</h2>
      <Input
        type="email"
        width="354px"
        label="Логин"
        name="email"
        value={state.email}
        onChange={handleFormInput}
        error={state.errors.email}
      />
      <Input
        type="password"
        width="354px"
        label="Пароль"
        onChange={handleFormInput}
        name="password"
        value={state.password}
        error={state.errors.password}
      />
      <Button onClick={handleSubmitForm}>Войти</Button>
    </div>
  );
}

export default AuthForm;
