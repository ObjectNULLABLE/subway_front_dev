import * as types from "../actions/track/types";

const initialState = {
  tracksArray: [],
  occupyedTracks: []
};

export const tracks = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TRACKS:
      return {
        ...state,
        tracksArray: action.tracks
      };

    case types.SET_OCCUPYED_TRACKS: {
      let occupyedTracks = state.occupyedTracks.slice()
      console.log(occupyedTracks);
      occupyedTracks.push(action.occupyedTracks)
      return {
        ...state,
        occupyedTracks
      };
    }

    default:
      return state;
  }
};
