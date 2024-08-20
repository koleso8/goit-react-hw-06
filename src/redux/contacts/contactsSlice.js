const { createSlice } = require('@reduxjs/toolkit');

const InitialState = { items: [] };

const slice = createSlice({
  name: 'contacts',
  redusers: {
    addContact: state => state.items,
  },
});
