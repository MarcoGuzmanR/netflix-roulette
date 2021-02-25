import React from 'react';
import './app.css';
import MovieSearch from './components/search/search';
import MovieFilter from './components/movie-filter/category-filter';
import MovieSort from './components/movie-sort/sort-list';
import MovieGrid from './components/movie-grid/grid';

function App() {
  return (
    <div className="netflix-roulette-content">
      <MovieSearch />

      <div className="movie-main-content">
        <MovieFilter />
        <MovieSort />
        <MovieGrid />
      </div>
    </div>
  );
}

export default App;