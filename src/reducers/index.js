import { combineReducers } from "redux";

import postReducer from "./postReducer";
import postsReducer from "./postsReducer";
import commentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
    comments: commentsReducer,
});

export default rootReducer;