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
      let index;

      const hasRecipe = state.bookmarks.some((rec, i) => {
        index = i;
        return rec.payload.recipeId === state.recipe.payload.recipe_id
      });

      console.log(hasRecipe)
      if (hasRecipe) {
        state.bookmarks.splice(index, 1)
        state.recipe.payload.bookmarked = false;

      } else {
        state.recipe.payload.bookmarked = true;
        state.bookmarks.push(action.payload);
      }
    },
  }
});

export const recipesActions = recipesSlice.actions;
export default recipesSlice;
