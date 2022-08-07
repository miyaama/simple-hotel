import { createAction, createReducer } from "@reduxjs/toolkit";

export const GET_HOTELS = "GET_HOTELS";
export const SET_HOTELS = "SET_HOTELS";
export const SET_SEARCH_PARAMS = "SET_SEARCH_PARAMS";
export const CHANGE_FAVORITE_HOTEL = "CHANGE_FAVORITE_HOTEL";
export const SORT_FAVORITE_HOTELS = "SORT_FAVORITE_HOTELS";

const initialState = {
  hotels: [],
  searchParams: {
    city: "",
    dayIn: "",
    dayOut: "",
  },
  favoriteHotels: {
    list: {},
    ids: [],
  },
  images: [
    {
      url: "https://i.ibb.co/XbCCbTF/Rectangle-23.png",
      id: 1,
    },
    {
      url: "https://i.ibb.co/FzCqjpm/Rectangle-24.png",
      id: 2,
    },
    {
      url: "https://i.ibb.co/qRpCnrB/Rectangle-28.png",
      id: 3,
    },
    {
      url: "https://i.ibb.co/4ttBQ33/Rectangle-29.png",
      id: 4,
    },
    {
      url: "https://i.ibb.co/XbCCbTF/Rectangle-23.png",
      id: 5,
    },
    {
      url: "https://i.ibb.co/FzCqjpm/Rectangle-24.png",
      id: 6,
    },
    {
      url: "https://i.ibb.co/qRpCnrB/Rectangle-28.png",
      id: 7,
    },
  ],
};

export const getHotels = createAction(GET_HOTELS);
export const setHotels = createAction(SET_HOTELS);
export const setSearchParams = createAction(SET_SEARCH_PARAMS);
export const changeFavoriteHotel = createAction(CHANGE_FAVORITE_HOTEL);
export const sortFavoriteHotels = createAction(SORT_FAVORITE_HOTELS);

export const hotelsReducer = createReducer(initialState, {
  [SET_HOTELS]: (state, action) => {
    state.hotels = action.payload;
  },
  [SET_SEARCH_PARAMS]: (state, { payload }) => {
    const { city, dateIn, amountOfDays } = payload;
    state.searchParams = { city, dateIn, amountOfDays };
  },
  [CHANGE_FAVORITE_HOTEL]: (state, { payload }) => {
    const { hotel, arrivalDate, amountOfDays } = payload;

    const hotelId = hotel.hotelId;

    let newFavoriteHotels = { ...state.favoriteHotels.list };
    let newFavoriteHotelsIds = [...state.favoriteHotels.ids];

    if (newFavoriteHotels?.[hotelId]) {
      delete newFavoriteHotels[hotelId];
      newFavoriteHotelsIds = newFavoriteHotelsIds.filter(
        (id) => id !== hotelId
      );
    } else {
      newFavoriteHotels[hotelId] = {
        ...hotel,
        arrivalDate,
        amountOfDays,
      };
      newFavoriteHotelsIds = [...newFavoriteHotelsIds, hotelId];
    }

    state.favoriteHotels.list = newFavoriteHotels;
    state.favoriteHotels.ids = newFavoriteHotelsIds;
  },
  [SORT_FAVORITE_HOTELS]: (state, { payload }) => {
    const { type, isUpSort } = payload;

    const sortFunction = (prev, next) =>
      isUpSort ? next[type] - prev[type] : prev[type] - next[type];

    let sortedFavoriteHotels = Object.values(state.favoriteHotels.list);

    sortedFavoriteHotels.sort(sortFunction);

    const newFavoriteHotelsIds = [];

    sortedFavoriteHotels.forEach((hotel) => {
      newFavoriteHotelsIds.push(hotel.hotelId);
    });

    state.favoriteHotels.ids = newFavoriteHotelsIds;
  },
});
