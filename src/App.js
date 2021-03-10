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

function App() {
  const [searchPage, setSearchPage] = React.useState(true);
  const [movieDetails, setMovieDetails] = React.useState({});

  return (
    <MovieContext.Provider value={{movieDetails, setMovieDetails, searchPage, setSearchPage}}>
      <div className="netflix-roulette-content">
        { searchPage ?
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

export default App;