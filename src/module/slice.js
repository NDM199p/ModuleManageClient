import { createSlice } from "@reduxjs/toolkit";

const modunSlice = createSlice({
  name: "modun",
  initialState: {
    moduns: [],
    isFetch: false,
  },
  reducers: {
    // gget all
    getModunStart: (state) => {},
    getModunSuccess: (state, action) => {
      state.moduns = action.payload;
    },

    // create
    addModunSuccess: (state, action) => {
      state.moduns.push(action.payload);
    },

    // update
    updateModunSuccess: (state, action) => {
      // eslint-disable-next-line eqeqeq
      state.moduns[state.moduns.findIndex((modun) => modun._id == action.payload._id)] =
        action.payload;
    },
    // delete
    deleteModunSuccess: (state, action) => {
      state.moduns.splice(
        state.moduns.findIndex((modun) => modun._id === action.payload._id),
        1
      );
    },
  },
});

export const { getModunSuccess, addModunSuccess, deleteModunSuccess, updateModunSuccess } =
  modunSlice.actions;

export default modunSlice.reducer;
