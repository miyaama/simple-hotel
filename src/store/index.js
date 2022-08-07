import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { loginReducer, hotelsReducer } from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  login: loginReducer,
  hotels: hotelsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
