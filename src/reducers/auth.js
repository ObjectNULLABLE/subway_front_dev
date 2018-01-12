import * as types from '../actions/auth/types'

const initialState = {
  username: null,
  id: null
};

export const user = (state = initialState, action) => {
  switch (action.type) {

    case types.AUTH_LOGIN:
      return {
        id: action.id,
        username: action.username
      }

    case types.AUTH_LOGOUT:
      return {
        id: null,
        username: null
      }
      
    default: return state;
  }
};
