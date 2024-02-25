import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const cohortName = "2401-fsa-et-web-ft-sf-gavriel";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const initialState = {
  value: [],
};

//unique aciton because we are using Thunk, thunk is async/await
//holds all the reducer

export const fetchAllPlayers = createAsyncThunk( //2
  API_URL + "/players",
  async () => {
    const response = await fetch(API_URL + "/players");
    const result = await response.json();
    console.log("check2", result.data);
    return result.data;
  }
);

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    getAllPlayers: async (state) => {
      /*
      const data = await fetchAllPlayers();
      console.log("data:", data);
      state.value = [...data];
      */
    },
    getSinglePlayer: (state) => {
      state.value -= 1;
    },
    deletePlayer: (state, action) => {
      state.value += action.payload;
    },
    addPlayer: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    /*
    builder.addCase(fetchAllPlayers, (state, action) => {
      return action.payload;
    });
    */
    //state is related to the store
    //action coress data that comes back
    builder.addCase(fetchAllPlayers.fulfilled, (state, action) => {
      return action.payload.players; //3
    });
  },
});

// Action creators are generated for each case reducer function
export const { getSinglePlayer, getAllPlayers, deletePlayer, addPlayer } =
  playersSlice.actions;

export default playersSlice.reducer;
