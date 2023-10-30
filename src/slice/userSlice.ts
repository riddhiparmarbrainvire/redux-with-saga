import { createSlice } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    users: [],
  },
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },
    getUserData: (state, action) => {
      // state.users.push(action.payload);
      state.users = action.payload;
      console.log(state.users, "ss uu");
    },
    addUser: (state: any, action) => {
      console.log(state, "s in add");
      state = state.users.push(action.payload);
    },
    deleteUser: (state: any, action) => {
      state.users.filter(
        (u: { [key: string]: any }) => u.id !== action.payload
      );
      console.log(state.users, "sttae");
      return state;
    },
  },
});

export const { getUserData, isLoading, addUser, deleteUser } = userData.actions;
export default userData.reducer;
