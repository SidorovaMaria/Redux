import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

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
