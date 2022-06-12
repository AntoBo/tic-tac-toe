import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    turnCount: 0,
    fieldSize: 3,
    fieldData: [],
    winner: "",
    player1: {
      name: "",
      score: 0,
    },
    player2: {
      name: "",
      score: 0,
    },
  },
  reducers: {
    setTurnCount: (state) => {
      state.turnCount = state.turnCount + 1;
    },
    initFieldData: (state, { payload }) => {
      state.fieldData = payload;
    },
    setFieldData: (state, { payload: { mark, idx } }) => {
      state.fieldData[idx] = mark;
    },
    setWinner: (state, { payload }) => {
      state.winner = payload;
    },
    setPlayersNames: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export default gameSlice.reducer;
export const {
  setWinner,
  setPlayersNames,
  setTurnCount,
  initFieldData,
  setFieldData,
} = gameSlice.actions;
