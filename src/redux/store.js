import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movies/movieSlice'
import inputSlice  from "./movies/inputSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        input: inputSlice
    } 
})