import React from 'react';
import './grid.css';
import MovieItem from '../movie-item/item';
import movieList from '../../movies';

function MovieGrid() {
  return (
    <div className="movie-grid-content">
      {movieList.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />
      })}
    </div>
  );
};

export default MovieGrid;