import React from 'react';
import './app.css';
import './buttons.css';
import MovieAdd from './components/movieAdd/add';
import MovieSearch from './components/movieSearch/search';
import MovieFilter from './components/movieFilter/categoryFilter';
import MovieSort from './components/movieSort/sortList';
import MovieGrid from './components/movieGrid/grid';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import ErrorFallback from './components/errorBoundary/errorFallback';

function App() {
  return (
    <div className="netflix-roulette-content">
      <MovieAdd />
      <MovieSearch />

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
  );
}

export default App;