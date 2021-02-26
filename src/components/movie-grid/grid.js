import React from 'react';
import './grid.css';
import MovieItem from '../movie-item/item';
import movieList from '../../movies';

function MovieGrid() {
  // Simulate Error for ErrorBoundary component
  // throw new Error('Hello from error');
  return (
    <div className="movie-grid-content">
      {movieList.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;