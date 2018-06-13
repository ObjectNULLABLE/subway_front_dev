import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

<<<<<<< Updated upstream
import { user } from './auth';
import { food } from './food';
import { cart } from './cart';

export default combineReducers({ user, food, cart });
=======
import { user } from "./auth";
import { food } from "./food";
import { cart } from "./cart";
import { tracks } from "./tracks";

export default combineReducers({
  toastr: toastrReducer,
  user,
  food,
  cart,
  tracks
});
>>>>>>> Stashed changes
