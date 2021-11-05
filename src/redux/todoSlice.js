import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { title: "Todo1", description: "Desc1" },
    { title: "Todo2", description: "Desc2" },
    { title: "Todo3", description: "Desc3" },
    { title: "Todo4", description: "Desc4" },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload.title,
        description: action.payload.description,
      };
      state.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
