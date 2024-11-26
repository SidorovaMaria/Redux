import { createSlice } from "@reduxjs/toolkit";

// Define a TS type for the data we will be using

export interface Post {
  id: string;
  title: string;
  content: string;
}

// Create an iniail state vlaue for the reducer, with that type
const initialState: Post[] = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
