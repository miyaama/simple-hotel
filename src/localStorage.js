const LOCAL_STORAGE_AUTH = "LOCAL_STORAGE_AUTH";

export const localStorage = window.localStorage;

export const setAuthToLocalStorage = (isAuth) =>
  localStorage.setItem(LOCAL_STORAGE_AUTH, isAuth);

export const getAuthFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH));
