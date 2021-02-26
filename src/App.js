import React from 'react';
import './app.css';
import MovieSearch from './components/search/search';
import MovieFilter from './components/movie-filter/category-filter';
import MovieSort from './components/movie-sort/sort-list';
import MovieGrid from './components/movie-grid/grid';
import ErrorBoundary from './components/error-boundary/error-boundary';
import ErrorFallback from './components/error-boundary/error-fallback';

function App() {
  return (
    <div className="netflix-roulette-content">
      <MovieSearch />

      <div className="movie-main-content">
        <MovieFilter />
        <MovieSort />

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <MovieGrid />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;