import { combineReducers } from 'redux';

import users from './users';
import user from './user';

const reducer = combineReducers({
    users,
    user
});

export default reducer;