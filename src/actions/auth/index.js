import * as types from './types';

export const setUser = (name, id) => ({
  type: types.SET_USER,
  name,
  id
});

export const fetchUser = (email, password) => ({
  type: types.FETCH_USER,
  email,
  password
})

export const purgeUser = () => ({
  type: types.PURGE_USER
})