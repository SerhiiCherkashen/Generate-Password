import { configureStore } from "@reduxjs/toolkit";
import passwordGeneratorReducer from "./pGeneratorSlice";

export const store = configureStore({
  reducer: {
    passwordGeneratorReducer,
  },
});
