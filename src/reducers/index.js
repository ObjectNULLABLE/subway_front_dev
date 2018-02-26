import { combineReducers } from 'redux';

import { user } from './auth';
import { food } from './food';
import { cart } from './cart';
import { tracks } from './tracks';

export default combineReducers({ user, food, cart, tracks });
