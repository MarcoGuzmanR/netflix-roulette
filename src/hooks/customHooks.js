import React from 'react';
import MovieContext from '../movieContext/context';

function useMovieDetails() {
  const { movieDetails, setMovieDetails } = React.useContext(MovieContext);

  return [movieDetails, setMovieDetails]
}

export { useMovieDetails };