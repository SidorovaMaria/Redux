import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  //Pass in the root reducer setup as tyhe 'reducer' argument
  reducer: {
    posts: postsReducer,
  },
});

// Infer the type of store
export type AppStore = typeof store;

//Infer the 'Appispatch" type from the store itself
export type AppDispatch = typeof store.dispatch;

// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>;