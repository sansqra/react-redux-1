import { configureStore } from "@reduxjs/toolkit";
import entitiesReducer from "./entities";

export const store = configureStore({
    reducer: {
        entities: entitiesReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch