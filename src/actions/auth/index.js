import * as types from './types';

export const setUser = name => ({
  type: types.SET_USER,
  name
});

export const fetchUser = (username, password) => ({
  type: types.FETCH_USER,
  username,
  password
});

export const getUser = token => ({
  type: types.GET_USER,
  token
});

export const signupUser = userCreds => ({
  type: types.SIGNUP_USER,
  ...userCreds
});

export const purgeUser = () => ({
  type: types.PURGE_USER
});
