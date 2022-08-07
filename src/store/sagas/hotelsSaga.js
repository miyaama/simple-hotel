import { call, put } from "redux-saga/effects";
import { setHotels, setSearchParams } from "../reducers";
import { getFormattedDate } from "../../utils";

export function* workGetHotels(action) {
  const { city, date, amountOfDays } = action.payload;

  try {
    const dateIn = getFormattedDate(date);

    let dateOut = new Date(dateIn);
    dateOut.setDate(dateOut.getDate() + amountOfDays);
    dateOut = getFormattedDate(dateOut);

    const hotels = yield call(() =>
      fetch(
        `http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${dateIn}&checkOut=${dateOut}&limit=10`
      ).then((data) => data.json())
    );

    yield put(setSearchParams({ city, dateIn, amountOfDays }));
    yield put(setHotels(hotels.length ? hotels : []));
  } catch (error) {
    console.error(error);
  }
}
