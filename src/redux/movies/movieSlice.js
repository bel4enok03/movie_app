import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	movies: {},
	shows: {},
	selectMovieOrShow: {},
};

export const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addMovies: (state, action) => {
			state.movies = action.payload;
		},
		addShows: (state, action) => {
			state.shows = action.payload
		},
		selectedMovieOrShow: (state, action) => {
			state.selectMovieOrShow = action.payload;
		},
	},
});


export const { addMovies, addShows, selectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
