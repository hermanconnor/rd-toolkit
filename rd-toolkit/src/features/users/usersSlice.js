import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Nomad' },
  { id: '1', name: 'Outlaw' },
  { id: '2', name: 'Scorch' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
