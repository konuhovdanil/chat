import {ADD_USER} from '../actions';

function reducer(state = [], action) {
    switch (action.type) {
        case ADD_USER:

            return action.username;

        default:
            return state;
    }
}

export default reducer;