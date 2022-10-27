import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./language-module/slice";
import modunReducer from "./module/slice";
import tagReducer from "./tag/slice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    modun: modunReducer,
    tag: tagReducer,
  },
});
