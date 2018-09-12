export const ADD_USER = 'ADD_USER';

let nextId = 5;

export function addUsername(username) {
    return {
        type: ADD_USER,
        id: nextId++,
        username
    };
}