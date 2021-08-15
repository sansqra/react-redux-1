import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "./configureStore";

const initialState : { name : string } = {
    name : ''
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers : {
        setName : (state, action : PayloadAction<string>) => {
            state.name = action.payload;
        }
    }
});

export default formSlice.reducer;
export const { setName } = formSlice.actions;
