import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieApi from '../../common/api/MovieApi';
import { APIKey } from '../../common/api/MovieApiKey';
import { addMovies } from '../../redux/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';

const Home = () => {
	const movieText = 'harry';
	const dispatch = useDispatch();

	useEffect(() => {
        const fetchMovies = async () => {
            const responce = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
            dispatch(addMovies(responce.data));

        };
		fetchMovies();
	}, [dispatch]);

	return (
		<div>
			<div className="banner-img"></div>
			<MovieListing />
		</div>
	);
};

export default Home;
