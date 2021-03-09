import React from 'react';
import MovieContext from './context';

function MovieProvider(props) {
  const [movieDetails, setMovieDetails] = React.useState({ movie: {id: 1}});

  return (
    <MovieContext.Provider value={{movieDetails, setMovieDetails}}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;