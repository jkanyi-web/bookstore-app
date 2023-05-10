/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      const statusToUpdate = action.payload;
      state.list = state.list.map((category) => {
        if (category.status === 'Under Construction') {
          return {
            ...category,
            status: statusToUpdate,
          };
        }
        return category;
      });
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
