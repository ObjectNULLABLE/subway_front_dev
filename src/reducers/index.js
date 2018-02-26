import { combineReducers } from 'redux';

import { user } from './auth';
import { food } from './food';
import { cart } from './cart';

export default combineReducers({ user, food, cart });
