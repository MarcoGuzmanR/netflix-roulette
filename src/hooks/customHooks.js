import React from 'react';
import MovieContext from '../movieContext/context';

function useMovieDetails() {
  const { movieDetails, setMovieDetails } = React.useContext(MovieContext);

  return [movieDetails, setMovieDetails]
}

function useShowSearch() {
  const { showSearch, setShowSearch } = React.useContext(MovieContext);

  return [showSearch, setShowSearch]
}

export { useMovieDetails, useShowSearch };