import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
    name : "lang",
    initialState : {
        language : true
    },
    reducers : {
        change : (state) => {
            state.language = !state.language;
        }
    }
})

export const { change } = langSlice.actions
export default langSlice.reducer;

