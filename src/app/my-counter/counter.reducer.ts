// Reducer?
// fn that will take in two params - state, action - and return a new state
// action - what happened in the app
// state - what is the data

import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

// Let's keep initial data for this feature 
const initialState = 0;

// Let's create a reducer function
export const counterReducer = createReducer(initialState,
  on(increment, (state) => {
    console.log(state); // store data
    return state + 1;
  }), 
  on(decrement, (state) => {
    console.log(state); // store data
    return state - 1;
  }),
  on(reset, (state) => {
    console.log(state);
    return 0;
  }));
