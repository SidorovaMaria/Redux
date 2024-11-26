import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {
    // Decalre a 'case reducer"
    postAdded(state, action: PayloadAction<Post>) {
      // "mutate" the existing array, save to do since creaetSlice uses Ummer inside.
      state.push(action.payload);
    },
    postUpdated(state, action: PayloadAction<Post>) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});
export const { postAdded, postUpdated } = postSlice.actions;

export default postSlice.reducer;
