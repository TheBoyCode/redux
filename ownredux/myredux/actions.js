import { BAD, GOOD, INITIAL_STATE } from "./action-types";

export function makeGood(){
    return {
        type: GOOD
    }
};

export function makeBad(){
    return {
        type: BAD
    }
};

export function makeInit(){
    return {
        type: INITIAL_STATE
    }
};