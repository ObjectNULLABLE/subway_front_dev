import * as types from '../actions/auth/types';

const initialState = {
  name: null,
  id: null,
  userLoggedIn: false
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        id: action.id,
        name: action.name,
        userLoggedIn: true
      };

    case types.PURGE_USER:
      return {
        id: null,
        name: null,
        userLoggedIn: false
      };

    default:
      return state;
  }
};
