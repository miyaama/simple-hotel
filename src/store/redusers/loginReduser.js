import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

export const loginTrue = createAction("LOGIN_TRUE");
export const loginFalse = createAction("LOGIN_FALSE");

export default createReducer(initialState, {
  [loginTrue]: function (state) {
    state.isLogin = true;
  },
  [loginFalse]: function (state) {
    state.isLogin = false;
  },
});

