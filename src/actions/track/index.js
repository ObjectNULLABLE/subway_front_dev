import * as types from './types';

export const fetchTracks = date => ({
  type: types.FETCH_TRACKS,
  date
});

export const occupyTracks = (date, time, trackId) => ({
  type: types.OCCUPY_TRACKS,
  date,
  time,
  trackId
});

export const releaseTracks = (date, time, trackId) => ({
  type: types.RELEASE_TRACKS,
  date,
  time,
  trackId
});

export const orderTracks = () => ({
  type: types.ORDER_TRACKS
});

export const setTracks = tracks => ({
  type: types.SET_TRACKS,
  tracks
});

export const setOccupyedTracks = occupyedTracks => ({
  type: types.SET_OCCUPYED_TRACKS,
  occupyedTracks
});
