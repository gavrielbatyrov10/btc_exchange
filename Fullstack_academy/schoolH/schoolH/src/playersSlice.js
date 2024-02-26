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
} = playersSlice.actions;

export const fetchAllPlayers = () => async (dispatch) => {
  dispatch(fetchAllPlayersStart());
  try {
    const response = await fetch("https://your-api-url.com/players");
    const data = await response.json();
    dispatch(fetchAllPlayersSuccess(data));
  } catch (error) {
    dispatch(fetchAllPlayersFailure(error.message));
  }
};

export default playersSlice.reducer;
