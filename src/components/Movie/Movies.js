import React, { Component } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.setState(() => ({
      movies: MovieService.getMovies(),
    }));
  }

  addMovie = (movie) =>{
    const lastMovie = this.state.movies[this.state.movies.length - 1];
    let newId = this.state.movies.length ? lastMovie.id + 100 : 100;
    movie.id = newId;
    movie.rating = 0.0;


    this.setState({
      movies : [...this.state.movies, movie]
    })
  };

  removeMovie = (id) =>{
    //console.log(id);
    this.setState({
      movies : this.state.movies.filter(movie => movie.id !== id)
    })
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <MovieList  movies={this.state.movies} addMovie={this.addMovie} removeMovie={this.removeMovie} />
          </div>
        </div>
      </div>
    );
  }
}
