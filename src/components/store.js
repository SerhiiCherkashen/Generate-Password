import { configureStore } from "@reduxjs/toolkit";
import clipboardReducer from "./clipboardSlice";

export const store = configureStore({
  reducer: {
    clipboardReducer,
  },
});
