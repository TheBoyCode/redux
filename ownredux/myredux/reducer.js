import { BAD, GOOD, INITIAL_STATE } from "./action-types";

export function reducer(state, action) {
    if (action.type === GOOD) {
        state = "Good :)";
    } else if (action.type === BAD) {
        state = "Bad :(";
    } else if (action.type === INITIAL_STATE) {
        state = "No data";
    }
    
    return state;
}