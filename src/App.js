import React from 'react';
import './app.css';
import './buttons.css';
import MovieAdd from './components/movieAdd/add';
import MovieSearch from './components/movieSearch/search';
import MovieDetails from './components/movieDetails/details';
import MovieFilter from './components/movieFilter/categoryFilter';
import MovieSort from './components/movieSort/sortList';
import MovieGrid from './components/movieGrid/grid';
import MovieContext from './movieContext/context';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import ErrorFallback from './components/errorBoundary/errorFallback';
import { connect } from 'react-redux';
import { loadMoviesService } from './services/movies';
import { loadMovies as loadMoviesAction } from './state/actions/movies';

function App({ loadMovies }) {
  const [showSearch, setShowSearch] = React.useState(true);
  const [movieDetails, setMovieDetails] = React.useState({});

  React.useEffect(async () => {
    const response = await loadMoviesService();

    if (response.data) {
      loadMovies(response.data);
    }
  }, []);

  return (
    <MovieContext.Provider value={{movieDetails, setMovieDetails, showSearch, setShowSearch}}>
      <div className="netflix-roulette-content">
        { showSearch ?
          (
            <>
              <MovieAdd />
              <MovieSearch />
            </>
          ) : <MovieDetails />
        }

        <div className="movie-main-content">
          <div className="main-content--header">
            <MovieFilter />
            <MovieSort />
          </div>

          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <MovieGrid />
          </ErrorBoundary>
        </div>
      </div>
    </MovieContext.Provider>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovies: (movies) => {
      dispatch(loadMoviesAction(movies));
    }
  }
}

export default connect(null, mapDispatchToProps)(App);