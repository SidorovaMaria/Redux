import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { selectCurrentUsername } from "../auth/authSlice";

interface User {
  id: string;
  name: string;
}
const initialState: User[] = [
  { id: "0", name: "Tianna Jenkins" },
  { id: "1", name: "Kevin Grant" },
  { id: "2", name: "Madison Price" },
];

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
});
export const { selectAllUsers, selectUserById } = userSlice.selectors;
export default userSlice.reducer;
export const selectCurrentUser = (state: RootState) => {
  const currentUsername = selectCurrentUsername(state);
  return selectUserById(state, currentUsername);
};

// export const selectUserById = (state: RootState, userId: string | null) =>
//   state.users.find(user => user.id === userId)
