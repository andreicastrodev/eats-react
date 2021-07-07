import { createSlice } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
  name: "recipe",
  initialState: {
    search: {
      query: "",
      results: [],
    },
    recipe: {},
    bookmarks: [],
  },
  reducers: {
    addQueryAndResults(state, action) {
      const { payload } = action.payload;
      state.search.query = payload.query;
      state.search.results = payload.DATA.recipes;
    },

    addRecipeOnHashChange(state, action) {
      state.recipe = action.payload;
    },
    addBookmarks(state, action) {
      state.bookmarks.push(action.payload);

      if (action.payload.recipeId === state.recipe.recipeID)
        state.recipe.payload.bookmarked = true;
    },
    deleteBookmarks(state, action) {
      const index = state.bookmarks.findIndex(
        (el) => el.recipeId === action.payload
      );
      console.log(index);
      state.bookmarks.splice(index, 1);
      if (action.payload === state.recipe.recipeId)
        state.recipe.payload.bookmarked = false;
    },
  },
});

export const recipesActions = recipesSlice.actions;
export default recipesSlice;
