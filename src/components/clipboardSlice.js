// src/features/clipboard/clipboardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const clipboardSlice = createSlice({
  name: "clipboard",
  initialState: {
    textToCopy: "",
  },
  reducers: {
    setTextToCopy: (state, action) => {
      console.log(" setTextToCopy : ", action.payload);
      state.textToCopy = action.payload;
    },
    changeInput: (state, action) => {
      //   console.log("changeInput : ", action.payload);
      console.log("changeInput : ", action.payload.target.value);
      //   console.log("changeInput : ", action.payload);
      state.textToCopy = action.payload.target.value;
    },
  },
});

export const { setTextToCopy, changeInput } = clipboardSlice.actions;
export default clipboardSlice.reducer;
