import React from 'react';
import './grid.css';
import MovieItem from '../movieItem/item';
import movieList from '../../movies';

function MovieGrid() {
  // Simulate Error for ErrorBoundary component
  // throw new Error('Hello from error');

  const [movies, setMovies]   = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setMovies(movieList);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  });

  return (
    <div className="movie-grid-content">
      { loading ?
        (
          <p>Loading movies...</p>
        ) : (
          movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
        ))
      ) }
    </div>
  );
};

export default MovieGrid;