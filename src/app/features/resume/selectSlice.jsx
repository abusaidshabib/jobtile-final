import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  template: 0,
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    setTemplate: (state, action) => {
      state.template = action.payload;
    },
  },
});

export const { setTemplate } = selectSlice.actions;

export default selectSlice.reducer;
