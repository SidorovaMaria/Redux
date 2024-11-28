import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { selectCurrentUsername } from "../auth/authSlice";
import { createAppAsyncThunk } from "../../app/withTypes";
import { client } from "../../api/client";

interface User {
  id: string;
  name: string;
}
const initialState: User[] = [];

export const fetchUsers = createAppAsyncThunk("users/fetchUsers", async () => {
  const response = await client.get<User[]>("/fakeApi/users");
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  selectors: {
    selectAllUsers: (usersState) => usersState,
    selectUserById: (usersState, userId: string | null) => {
      return usersState.find((user) => user.id === userId);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const { selectAllUsers, selectUserById } = userSlice.selectors;
export default userSlice.reducer;
export const selectCurrentUser = (state: RootState) => {
  const currentUsername = selectCurrentUsername(state);
  return selectUserById(state, currentUsername);
};

// export const selectUserById = (state: RootState, userId: string | null) =>
//   state.users.find(user => user.id === userId)
