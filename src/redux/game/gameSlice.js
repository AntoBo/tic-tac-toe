import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    turnCount: 0,
    fieldSize: 3,
    fieldData: [],
    winnerMark: "",
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
    resetTurnCount: (state) => {
      state.turnCount = 0;
    },
    initFieldData: (state, { payload }) => {
      state.fieldData = payload;
    },
    setFieldData: (state, { payload: { mark, idx } }) => {
      state.fieldData[idx] = mark;
    },
    setWinnerMark: (state, { payload }) => {
      state.winnerMark = payload;
    },
    setPlayersNames: (state, { payload }) => ({ ...state, ...payload }),
    incrementScore: (state, { payload }) => {
      state[payload].score = state[payload].score + 1;
    },
  },
});

export default gameSlice.reducer;
export const {
  setWinnerMark,
  setPlayersNames,
  setTurnCount,
  resetTurnCount,
  initFieldData,
  setFieldData,
  incrementScore,
} = gameSlice.actions;
