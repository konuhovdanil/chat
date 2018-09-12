import {ADD_MESSAGE, ADD_USER} from '../actions';

function reducer(state = [], action) {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                {id: action.id, username: action.username, messages: []}
            ];

        case ADD_MESSAGE:
            return state.filter(username => (username.username === action.username) ? username.messages.push({
                message: action.text,
                timestamp: action.timestamp
            }) : state);

        default:
            return state;
    }
}

export default reducer;