import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
import authReducer from "../features/auth/authSlice";
export const store = configureStore({
  //Pass in the root reducer setup as tyhe 'reducer' argument
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});

// Infer the type of store
export type AppStore = typeof store;

//Infer the 'Appispatch" type from the store itself
export type AppDispatch = typeof store.dispatch;

// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
