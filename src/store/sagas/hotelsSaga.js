import { call, put, takeEvery } from 'redux-saga/effects';
import { getDefaultHotels } from '../redusers/hotelsReduser';

function* workGetDefaultHotels() {
    const DefaultHotels = yield call(() => fetch('http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2022-08-05&checkOut=2022-08-09&limit=10'));
    const formattedDefaultHotels = yield DefaultHotels.json();
    yield put(getDefaultHotels(formattedDefaultHotels));
}

function* hotelsSaga() {
    yield takeEvery('./redusers/hotelsReduser', workGetDefaultHotels );
}

export default hotelsSaga;