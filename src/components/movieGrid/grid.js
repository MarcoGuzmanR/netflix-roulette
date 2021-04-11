import React from 'react';
import './grid.css';
import MovieItem from '../movieItem/item';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function MovieGrid({ movieList }) {
  // Simulate Error for ErrorBoundary component
  // throw new Error('Hello from error');

  const [movies, setMovies] = React.useState(movieList);

  React.useEffect(() => {
    setMovies(movieList);
  }, [movieList]);

  return (
    <React.Fragment>
      { movieList.length ?
        (
          <div className="movie-grid-content">
            {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="movies-not-found">
            <h1>No movie found</h1>
            <button type="button" className="btn-confirm">
              <Link to="/">GO BACK TO SEARCH</Link>
            </button>
          </div>
        )
      }
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const { movies: movieList } = state.moviesState;

  return { movieList };
}

export default connect(mapStateToProps)(MovieGrid);