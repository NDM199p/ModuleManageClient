import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    languages: [],
    isFetch: false,
  },
  reducers: {
    // gget all
    getLanguageStart: (state) => {},
    getLanguageSuccess: (state, action) => {
      state.languages = action.payload;
    },

    // create
    addLanguageSuccess: (state, action) => {
      state.languages.push(action.payload);
    },

    // update
    updateLanguageSuccess: (state, action) => {
      // eslint-disable-next-line eqeqeq
      state.languages[state.languages.findIndex((language) => language._id == action.payload._id)] =
        action.payload;
    },
    // delete
    deleteLanguageSuccess: (state, action) => {
      state.languages.splice(
        state.languages.findIndex((language) => language._id === action.payload._id),
        1
      );
    },
  },
});

export const {
  getLanguageSuccess,
  addLanguageSuccess,
  deleteLanguageSuccess,
  updateLanguageSuccess,
} = languageSlice.actions;

export default languageSlice.reducer;
