import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../../app/store";
import { nanoid } from "nanoid";
import { sub } from "date-fns";
import { userLoggedOut } from "../auth/authSlice";
export interface Reactions {
  thumbsUp: number;
  tada: number;
  heart: number;
  rocket: number;
  eyes: number;
}
export type ReactionName = keyof Reactions;

// Define a TS type for the data we will be using
export interface Post {
  id: string;
  title: string;
  content: string;
  user: string;
  date: string;
  reactions: Reactions;
}
type PostUpate = Pick<Post, "id" | "title" | "content">;

const initialReactions: Reactions = {
  thumbsUp: 0,
  tada: 0,
  heart: 0,
  rocket: 0,
  eyes: 0,
};
// Create an iniail state vlaue for the reducer, with that type
const initialState: Post[] = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello!",
    user: "0",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: initialReactions,
  },
  {
    id: "2",
    title: "Second Post",
    content: "More text",
    user: "2",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: initialReactions,
  },
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
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId,
            date: new Date().toISOString(),
            reactions: initialReactions,
          },
        };
      },
    },
    postUpdated(state, action: PayloadAction<PostUpate>) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(
      state,
      action: PayloadAction<{ postId: string; reaction: ReactionName }>
    ) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers: (builder) => {
    // Pass the action creator to `builder.addCase()`
    builder.addCase(userLoggedOut, (state) => {
      // Clear out the list of posts whenever the user logs out
      return [];
    });
  },
  selectors: {
    selectAllPosts: (postsState) => postsState,
    selectPostById: (postsState, postId: string) => {
      return postsState.find((post) => post.id === postId);
    },
  },
});
export const { postAdded, postUpdated, reactionAdded } = postSlice.actions;
export const { selectAllPosts, selectPostById } = postSlice.selectors;
export default postSlice.reducer;

// export const selectAllPosts = (state: RootState) => state.posts;
// export const selectPostById = (state: RootState, postId: string) =>
//   state.posts.find((post) => post.id === postId);
