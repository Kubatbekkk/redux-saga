import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { postsReducer } from "./PostsReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
})