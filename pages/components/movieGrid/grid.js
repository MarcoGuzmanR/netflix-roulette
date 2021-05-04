import React from 'react';
import styles from './grid.module.css';
import MovieItem from '../movieItem/item';
import { connect } from 'react-redux';

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
          <div className={styles['movie-grid-content']}>
            {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className={styles['movies-not-found']}>
            <h1>No movie found</h1>
            <button type="button" className="btn-confirm">GO BACK TO SEARCH</button>
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