import { createSlice } from "@reduxjs/toolkit";
import List from "../../components/List";

const initialState = {
  List
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.List.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookIndex = state.List.findIndex(
        (book) => book.id === action.payload
      );
      if (bookIndex !== -1) {
        state.List.splice(bookIndex, 1);
      }
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;