export const ADD_MESSAGE = 'ADD_MESSAGE';

export function addMessage(text, username, timestamp) {
    return {
        type: ADD_MESSAGE,
        text,
        username,
        timestamp
    };
}