import React, { useEffect, useState } from 'react';
import MovieApi from '../../common/api/MovieApi';
import { APIKey } from '../../common/api/MovieApiKey';
import './MovieDetail.scss';
import { useParams } from 'react-router';

const MovieDetail = () => {
	let { imdbID } = useParams();

	const [movie, setMovie] = useState('');

	useEffect(() => {
		const fetchMovieOfDetail = async () => {
			const responce = await MovieApi.get(`?apiKey=${APIKey}&i=${imdbID}&Plot=full`);
			setMovie(responce.data);
			console.log(responce);
		};
		fetchMovieOfDetail();
	}, [imdbID]);

	return (
		<div className="movie-section">
			<div className="section-left">
				<img src={movie.Poster} alt={movie.Title} />
			</div>
			<div className="section-right">
				<div className="movie-title">{movie.Title}</div>
				<div className="movie-plot">{movie.Plot}</div>
				<div className="movie-info">
					<div>
						<span>IMDB Rating</span>
						<span>{movie.imdbRating}</span>
					</div>
					<div>
						<span>IMDB Votes</span>
						<span>{movie.imdbVotes}</span>
					</div>
					<div>
						<span>Runtime</span>
						<span>{movie.Runtime}</span>
					</div>
					<div>
						<span>Year</span>
						<span>{movie.Year}</span>
					</div>
					<div>
						<span>Director</span>
						<span>{movie.Director}</span>
					</div>
					<div>
						<span>Actors</span>
						<span>{movie.Actors}</span>
					</div>
					<div>
						<span>Generes</span>
						<span>{movie.Genre}</span>
					</div>
					<div>
						<span>Languages</span>
						<span>{movie.Language}</span>
					</div>
					<div>
						<span>Country</span>
						<span>{movie.Country}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetail;
