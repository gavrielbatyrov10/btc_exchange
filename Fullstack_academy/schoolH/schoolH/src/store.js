import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import playersReducer from "./features/playersSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    players: playersReducer, //4
  },
});

export default store;
