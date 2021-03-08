import React from 'react';
import './search.css'

function MovieSearch() {
  return (
    <div className="search-main-container">
      <div className="find-movie-container">
        <label htmlFor="movie-search">FIND YOUR MOVIE</label>
      </div>

      <div className="search-container">
        <input id="movie-search" className="input-search" type="text" placeholder="What do you want to watch?" />
        <button className="btn-search" type="button">SEARCH</button>
      </div>
    </div>
  );
};

export default MovieSearch;