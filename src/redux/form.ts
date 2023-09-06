import { createSlice } from "@reduxjs/toolkit";

interface TodoState {
    text: string;
  }

  const initialState: TodoState = {
    text: "",
  };
  

const todoSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setText } = todoSlice.actions;
export default todoSlice.reducer;
