import { combineReducers } from 'redux';

import { user } from './auth';
import { food } from './food';

export default combineReducers({ user, food });
