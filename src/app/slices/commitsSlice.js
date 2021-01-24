import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  loading: false,
  hasErrors: false,
  commits: [],
};

const commitsSlice = createSlice({
  name: "commits",
  initialState,
  reducers: {
    getCommits: (state) => {
      state.loading = true;
    },

    getCommitsSuccess: (state, { payload }) => {
      state.commits = payload;
      state.loading = false;
      state.hasErrors = false;
    },

    getCommitsFailure: (state) => {
      state.hasErrors = true;
      state.loading = false;
    },
  },
});

export const {
  getCommits,
  getCommitsSuccess,
  getCommitsFailure,
} = commitsSlice.actions;

export const commitSelector = (state) => state.commits;

export default commitsSlice.reducer;

export function fetchCommits() {
  return async (dispatch) => {
    dispatch(getCommits());

    let data = [];

    axios
      .get("https://api.github.com/repositories/19438/commits")
      .then((response) => {
        response.data.map((commitResponse) => {
          data.push({
            id: commitResponse.sha,
            author: commitResponse.commit.author,
            commiter: commitResponse.commit.committer,
            message: commitResponse.commit.message,
            authorPage: commitResponse.author.html_url,
            authorImg: commitResponse.author.avatar_url
          });
        });
        dispatch(getCommitsSuccess(data));
      })
      .catch(() => {
        dispatch(getCommitsFailure());
      });
  };
}

