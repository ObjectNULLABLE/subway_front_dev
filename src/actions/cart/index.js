import * as types from './types';

export const addToCart = (food, amount) => ({
  type: types.ADD_TO_CART,
  food,
  amount
});

export const removeFromCart = foodId => ({
  type: types.REMOVE_FROM_CART,
  foodId
});

export const approveCart = () => ({
  type: types.APPROVE_CART
});
