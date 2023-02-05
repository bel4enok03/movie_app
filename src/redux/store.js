import { configureStore } from "@reduxjs/toolkit";
import movies from './movies/movieSlice'
import input  from "./movies/inputSlice";

export const store = configureStore({
    reducer: {
        movies: movies,
        input: input
    } 
})