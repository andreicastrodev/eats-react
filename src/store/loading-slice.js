import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    results: false,
    recipe: false,
  },
  reducers: {
    setResultsSpinner(state) {
      state.results = !state.results;
    },
    setRecipeSpinner(state) {
      state.recipe = !state.recipe;
    },
  },
});

export const loadingActions = loadingSlice.actions;
export default loadingSlice;
