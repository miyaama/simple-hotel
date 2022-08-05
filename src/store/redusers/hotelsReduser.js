import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  hotels: [],
  favHotels: [],
};

export const getDefaultHotels = createAction("GET_DEFAULT_HOTELS");

export default createReducer(initialState, {
  [getDefaultHotels]: function (state, action) {
    state.hotels = action.payload;
  },
});
