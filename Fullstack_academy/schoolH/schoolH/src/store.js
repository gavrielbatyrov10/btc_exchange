import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import playersReducer from "./playersSlice"; // Corrected import path
// const API_URL =
//   "https://fsa-puppy-bowl.herokuapp.com/api/2401-fsa-et-web-ft-sf-/players";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    players: playersReducer, //4
  },
});

export default store;
