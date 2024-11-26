import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { nanoid } from "nanoid";

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
    // postAdded(state, action: PayloadAction<Post>) {
    //   // "mutate" the existing array, save to do since creaetSlice uses Ummer inside.
    //   state.push(action.payload);
    // },
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string) {
        return {
          payload: { id: nanoid(), title, content },
        };
      },
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
  selectors: {
    selectAllPosts: (postsState) => postsState,
    selectPostById: (postsState, postId: string) => {
      return postsState.find((post) => post.id === postId);
    },
  },
});
export const { postAdded, postUpdated } = postSlice.actions;
export const { selectAllPosts, selectPostById } = postSlice.selectors;
export default postSlice.reducer;

// export const selectAllPosts = (state: RootState) => state.posts;
// export const selectPostById = (state: RootState, postId: string) =>
//   state.posts.find((post) => post.id === postId);
