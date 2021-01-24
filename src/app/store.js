import { configureStore } from '@reduxjs/toolkit';
import  commitsReducer  from "../app/slices/commitsSlice";

export default configureStore({
  reducer: {
    commits: commitsReducer,
  },
});

