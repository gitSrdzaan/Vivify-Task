import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import AddMovie from './AddMovie';

const getMovies = (movies,addMovie,removeMovie, ratingMovie) => (
  <div>
    <div className="card-deck">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} removeMovie={removeMovie} ratingMovie={ratingMovie} />
      ))}
      
    </div>
      <div>
        <AddMovie addMovie={addMovie} />
      </div>
  </div>
);

const MovieList = ({ movies, addMovie, removeMovie,ratingMovie}) => <div>{getMovies(movies,addMovie,removeMovie, ratingMovie)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
