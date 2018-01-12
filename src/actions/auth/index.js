import * as types from './types';

export const logIn = (username, id) => ({
  type: types.AUTH_LOGIN,
  username,
  id
});

export const logOut = () => ({
  type: types.AUTH_LOGOUT
})