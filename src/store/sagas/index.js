import { takeLatest, all } from "redux-saga/effects";

import { workGetHotels } from "./hotelsSaga";
import { GET_HOTELS } from "../reducers";

function* root() {
  yield all([takeLatest(GET_HOTELS, workGetHotels)]);
}

export default root;
