import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteMovies: [],
};

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    updateFavoriteMovieAction: (state, { payload }) => {
      // checking if the movie if present in the favoriteMovies list. If the movie is present we are removing it and vice versa.
      const index = state.favoriteMovies.findIndex(item => item.id === payload.id);
      if (index !== -1) {
        state.favoriteMovies.splice(index, 1);
      } else {
        state.favoriteMovies.push(payload);
      }
    }
  }
});

export const {
  actions: { updateFavoriteMovieAction, },
  reducer: moviesReducer,
} = movies;