import { makeBad, makeInit } from "../myredux/actions";

// Pattern Observer
export function createStore(reducer, initialState ) {
    let state = reducer(initialState, makeInit());
    const subscribers = [];
    return {
        dispatch(action) {
            state = reducer(state, action);
            subscribers.forEach( subscriber => subscriber())
        },
        subscribe(callback) {
            subscribers.push(callback);
        },
        getState() {
            return state;
        }
    }
}