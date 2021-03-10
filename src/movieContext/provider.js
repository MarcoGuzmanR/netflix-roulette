import React from 'react';
import MovieContext from './context';

function MovieProvider(props) {
  const [searchPage, setSearchPage] = React.useState(true);
  const [movieDetails, setMovieDetails] = React.useState({});

  return (
    <MovieContext.Provider value={{movieDetails, setMovieDetails, searchPage, setSearchPage}}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;