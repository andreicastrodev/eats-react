import {createSlice} from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: "loading",
    initialState: {
        error: ""

    },
    reducers: {
        setError(state, action) {
            state.error = action.payload
        }

    }
});

export const errorActions = errorSlice.actions;
export default errorSlice;
