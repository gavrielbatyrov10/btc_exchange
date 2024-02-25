import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const cohortName = "2401-fsa-et-web-ft-sf-gavriel";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = createAsyncThunk(
  "players/fetchAllPlayers",
  async () => {
    const response = await fetch(API_URL + "/players");
    const result = await response.json();
    console.log("check2", result.data);
    return result.data;
  }
);

export const addPlayer = createAsyncThunk(
  "players/addPlayer",
  async (playerData) => {
    const response = await fetch(API_URL + "/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerData),
    });
    const result = await response.json();
    return result.data;
  }
);

const playersSlice = createSlice({
  name: "players",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPlayer.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });
    builder.addCase(fetchAllPlayers.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default playersSlice.reducer;
