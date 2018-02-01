import * as types from '../actions/food/types';

const initialState = {
  foodArray: []
};

export const food = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FOOD:
      return {
        ...state,
        foodArray: action.foodArray
      };

    // case value:
    //   break;

    default:
      return state;
  }
};
