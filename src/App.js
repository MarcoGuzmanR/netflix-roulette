import React from 'react';
import MovieSearch from './components/search/search';
import MovieFilter from './components/movie-filter/category-filter';
import MovieSort from './components/movie-sort/sort-list';
import MovieGrid from './components/movie-grid/movie-grid';

function App() {
  return (
    <div class="whole-content">
      <MovieSearch />

      <div class="movie-main-content">
        <MovieFilter />
        <MovieSort />
        <MovieGrid />
      </div>
    </div>
  );
}

export default App;