import './styles.css'
import { createStore } from "./createStore.js";
import { reducer } from '../myredux/reducer';
import { makeBad, makeGood, makeInit } from '../myredux/actions';

const mood = document.getElementById("mood");
const goodBtn = document.getElementById("good");
const badBtn = document.getElementById("bad");

const store = createStore(reducer);

store.subscribe(() => {
    mood.textContent = store.getState();
});
store.dispatch(makeInit());

goodBtn.addEventListener('click', () => {
    store.dispatch(makeGood())
});

badBtn.addEventListener('click', () => {
    store.dispatch(makeBad())
});

