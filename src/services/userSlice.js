import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = '';
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

