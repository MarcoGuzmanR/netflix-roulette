import React from 'react';
import './grid.css';
import MovieItem from '../movieItem/item';
import { connect } from 'react-redux';

function MovieGrid({ movieList }) {
  // Simulate Error for ErrorBoundary component
  // throw new Error('Hello from error');

  const [movies, setMovies] = React.useState(movieList);

  return (
    <div className="movie-grid-content">
      { movieList.length ?
        (
          movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        ) : (
          <div>
            <h2>Search for movies</h2>
          </div>
        )
      }
    </div>
  );
};

function mapStateToProps(state) {
  const { movies: movieList } = state.moviesState;

  return { movieList };
}

export default connect(mapStateToProps)(MovieGrid);