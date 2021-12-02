import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./reducer";

export const store = configureStore({
    reducer: recipeReducer
})

export type RootState = ReturnType<typeof store.getState>;