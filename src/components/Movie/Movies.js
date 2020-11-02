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
    movie.rating = parseFloat(0.0);
    movie.ratings = [];


    this.setState({
      movies : [...this.state.movies, movie]
    })
  };

  removeMovie = (id) =>{
    //console.log(id);
    this.setState({
      movies : this.state.movies.filter(movie => movie.id !== id)
    })
  };

  averageRating(movie){
   
    let sum = 0.0;
    for(let rating of movie.ratings){
      sum += parseFloat(rating);
    }
    
    return sum/movie.ratings.length;
  };

  ratingMovie = (rating, id) =>{
    console.log('rating',rating,'movie id', id)
    let movies = this.state.movies;

    movies.map((movie)=>{
      if(movie.id === id){
        movie.ratings.push(rating);
        let avg = this.averageRating(movie);
        let [whole, part] = parseFloat(avg).toString().split(".");
        console.log('whole',whole,'part', part);
        if(typeof part !==  'undefined'){ // in case there is no floating point in the average ratings
          if(part !== 0){
            part = 0.5
          }
        }
        else{
          part = 0;
        }
        movie.rating = parseFloat(whole) + parseFloat(part);
        console.log('movie rating',movie.rating);
      }
     
      return movie;
    });

    this.setState(movies);

  };

  

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <MovieList  movies={this.state.movies} addMovie={this.addMovie} 
            removeMovie={this.removeMovie} ratingMovie={this.ratingMovie}/>
          </div>
        </div>
      </div>
    );
  }
}
