import * as types from './types';

export const setUser = name => ({
  type: types.SET_USER,
  name
});

export const fetchUserToken = (username, password) => ({
  type: types.FETCH_USER_TOKEN,
  username,
  password
});

export const getUser = token => ({
  type: types.GET_USER,
  token
});

export const signUpUser = userCreds => ({
  type: types.SIGN_UP_USER,
  ...userCreds
});

export const purgeUser = () => ({
  type: types.PURGE_USER
});
