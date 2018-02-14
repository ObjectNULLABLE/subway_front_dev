import * as types from '../actions/cart/types';

const initialState = {
  inCartItems: []
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: {
      let inCartItems = state.inCartItems.map(item => ({
        ...item
      }));

      for (let index = 0; index < inCartItems.length; index++) {
        if (inCartItems[index].food.key === action.food.key) {
          inCartItems[index].amount += action.amount;
          return {
            inCartItems
          };
        }
      }

      inCartItems.push({
        food: action.food,
        amount: action.amount
      });
      return {
        inCartItems
      };
    }

    case types.REMOVE_FROM_CART: {
      let inCartItems = state.inCartItems.map(item => ({
        ...item
      }));

      for (let index = 0; index < inCartItems.length; index++) {
        if (
          inCartItems[index].food.key === action.foodKey &&
          inCartItems[index].amount > action.amount
        ) {
          inCartItems[index].amount -= action.amount;
          return {
            inCartItems
          };
        } else {
          inCartItems.splice(inCartItems.indexOf(inCartItems[index]), 1);

          return {
            inCartItems
          };
        }
      }
    }

    default:
      return state;
  }
};
