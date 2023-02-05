import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieApi from '../../common/api/MovieApi';
import { APIKey } from '../../common/api/MovieApiKey';
import { getInput } from '../../redux/movies/inputSlice';
import { addMovies, addShows } from '../../redux/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';

const Home = () => {
	const text = useSelector(getInput)
	const dispatch = useDispatch();

	const movieText = 'dragon';
	const seriesText = 'house';

	useEffect(() => {
        const fetchMovies = async () => {
            const responce = await MovieApi.get(`?apiKey=${APIKey}&s=${text}&type=movie`);
            dispatch(addMovies(responce.data));
        };
		fetchMovies();
	}, [dispatch, text]);

	useEffect(() => {
		const fetchShow = async () => {
			const responce = await MovieApi.get(`?apiKey=${APIKey}&s=${text}&type=series`);
			dispatch(addShows(responce.data))
		};
		fetchShow()
	}, [dispatch, text])

	return (
		<div>
			<div className="banner-img"></div>
			<MovieListing />
		</div>
	);
};

export default Home;
