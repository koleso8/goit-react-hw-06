import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    chengeContact: (state, action) => {
      state.items = state.items.map(item =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    },
  },
});

export const contactsReducer = slice.reducer;

export const { addContact, deleteContact, chengeContact } = slice.actions;
