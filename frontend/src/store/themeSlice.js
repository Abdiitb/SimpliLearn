import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkTheme: false
}

export const themeSlice = createSlice({
    name: "themeProvider",
    initialState,
    reducers: {
        themeToggler: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
        }
    }
})

export const { themeToggler } = themeSlice.actions;

export default themeSlice.reducer;