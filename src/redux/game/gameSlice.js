import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: { turnCount: 0, fieldData: [] },
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
  },
});

export default gameSlice.reducer;
export const { setTurnCount, initFieldData, setFieldData } = gameSlice.actions;
