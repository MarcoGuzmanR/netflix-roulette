import React from 'react';
import './search.css'
import { connect } from 'react-redux';
import { searchMovies } from '../../state/actions/movies';

function MovieSearch({search}) {
  async function bla() {
    const response = await fetch(`http://localhost:4000/movies`);
    const movies   = await response.json();

    search(movies);
  }

  return (
    <div className="search-main-container">
      <div className="find-movie-container">
        <label htmlFor="movie-search">FIND YOUR MOVIE</label>
      </div>

      <div className="search-container">
        <input id="movie-search" className="input-search" type="text" placeholder="What do you want to watch?" />
        <button className="btn-search" type="button" onClick={bla}>SEARCH</button>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    search: (movies) => {
      dispatch(searchMovies(movies));
    }
  }
}

export default connect(null, mapDispatchToProps)(MovieSearch);