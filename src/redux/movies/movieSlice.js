import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	movies: {},
	selectMovieOrShow: {},
};

export const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addMovies: (state, action) => {
			state.movies = action.payload;
		},
		selectedMovieOrShow: (state, action) => {
			state.selectMovieOrShow = action.payload;
		},
	},
});


export const { addMovies, selectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
