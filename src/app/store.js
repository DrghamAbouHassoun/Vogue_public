import { configureStore } from "@reduxjs/toolkit";
import langSlice from "../features/lang/langSlice";

const store = configureStore({
    reducer : {
        lang : langSlice,
    }
})

export default store;