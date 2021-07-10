import {configureStore} from "@reduxjs/toolkit";
import recipesSlice from "./recipe-slice";
import loadingSlice from "./loading-slice";
import modeSlice from "./mode-slice";
import errorSlice from "./error-slice";
import logger from "redux-logger";
const store = configureStore({
    reducer: {
        recipe: recipesSlice.reducer,
        loading: loadingSlice.reducer,
        mode: modeSlice.reducer,
        error: errorSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
