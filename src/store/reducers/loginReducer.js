import { createAction, createReducer } from "@reduxjs/toolkit";

import { setAuthToLocalStorage } from "../../localStorage";

const LOGIN_TRUE = "LOGIN_TRUE";
const LOGIN_FALSE = "LOGIN_FALSE";

const initialState = {
  isLogin: false,
};

export const loginTrue = createAction(LOGIN_TRUE);
export const loginFalse = createAction(LOGIN_FALSE);

export const loginReducer = createReducer(initialState, {
  [LOGIN_TRUE]: function (state) {
    setAuthToLocalStorage(true);
    state.isLogin = true;
  },
  [LOGIN_FALSE]: function (state) {
    setAuthToLocalStorage(false);
    state.isLogin = false;
  },
});
