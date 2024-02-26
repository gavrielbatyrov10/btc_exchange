import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
  status: "idle",
  error: null,
};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    fetchAllPlayersStart(state) {
      state.status = "loading";
    },
    fetchAllPlayersSuccess(state, action) {
      state.status = "succeeded";
      state.players = action.payload;
    },
    fetchAllPlayersFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  fetchAllPlayersStart,
  fetchAllPlayersSuccess,
  fetchAllPlayersFailure,
  deleteSuccess,
} = playersSlice.actions;

export const deletePlayer = (playerId) => async (dispatch) => {
  console.log("delete", playerId);
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2401-fsa-et-web-ft-sf-/players/" +
        playerId,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log("fetch delete data", data);
    //dispatch(deleteSuccess(data));
    dispatch(fetchAllPlayers());
  } catch (error) {
    //dispatch(fetchAllPlayersFailure(error.message));
  }
};

export const fetchAllPlayers = () => async (dispatch) => {
  dispatch(fetchAllPlayersStart());
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2401-fsa-et-web-ft-sf-/players"
    );
    const data = await response.json();
    console.log("fetch data", data);
    dispatch(fetchAllPlayersSuccess(data.data.players));
  } catch (error) {
    dispatch(fetchAllPlayersFailure(error.message));
  }
};

export const addPlayer = (playerObj) => async (dispatch) => {
  try {
    // TODO
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2401-fsa-et-web-ft-sf-/players",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerObj),
      }
    );
    const result = await response.json();

    console.log("result", result);
    dispatch(fetchAllPlayers());
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

export default playersSlice.reducer;
