import * as types from './types';

export const fetchFood = () => ({
  type: types.FETCH_FOOD
});

export const setFood = foodArray => ({
  type: types.SET_FOOD,
  foodArray
});

export const purgeFood = () => ({
  type: types.PURGE_FOOD
});
