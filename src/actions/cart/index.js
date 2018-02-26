import * as types from './types';

export const addToCart = (food, amount) => ({
  type: types.ADD_TO_CART,
  food,
  amount
});

export const removeFromCart = (foodKey, amount) => ({
  type: types.REMOVE_FROM_CART,
  foodKey,
  amount
});

export const approveCart = order => ({
  type: types.APPROVE_CART,
  order
});
