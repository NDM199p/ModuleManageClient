import { createSlice } from "@reduxjs/toolkit";

const tagSlice = createSlice({
  name: "tag",
  initialState: {
    tags: [],
    isFetch: false,
  },
  reducers: {
    // gget all
    getTagStart: (state) => {},
    getTagSuccess: (state, action) => {
      state.tags = action.payload;
    },

    // create
    addTagSuccess: (state, action) => {
      state.tags.push(action.payload);
    },

    // update
    updateTagSuccess: (state, action) => {
      // eslint-disable-next-line eqeqeq
      state.tags[state.tags.findIndex((tag) => tag._id == action.payload._id)] = action.payload;
    },
    // delete
    deleteTagSuccess: (state, action) => {
      state.tags.splice(
        state.tags.findIndex((tag) => tag._id === action.payload._id),
        1
      );
    },
  },
});

export const { getTagSuccess, addTagSuccess, deleteTagSuccess, updateTagSuccess } =
  tagSlice.actions;

export default tagSlice.reducer;
