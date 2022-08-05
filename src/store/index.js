import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginReduser from "./redusers/loginReduser";
import hotelsReduser from "./redusers/hotelsReduser";
import createSagaMiddleware from "redux-saga";
import hotelsSaga from "./sagas/hotelsSaga";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  login: loginReduser,
  hotels: hotelsReduser,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(hotelsSaga);
