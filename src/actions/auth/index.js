import * as types from './types';

export const setUser = name => ({
  type: types.SET_USER,
  name
});

export const fetchUser = (email, password) => ({
  type: types.FETCH_USER,
  email,
  password
});

export const getUser = userID => ({
  type: types.GET_USER,
  userID
});

export const purgeUser = () => ({
  type: types.PURGE_USER
});
