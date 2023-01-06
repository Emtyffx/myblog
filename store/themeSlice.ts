import { createSlice } from "@reduxjs/toolkit";

interface themeState {
  darkTheme: boolean;
}

const initialState: themeState = {
  darkTheme: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});
export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
