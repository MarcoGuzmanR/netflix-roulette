import React from 'react';
import './search.css'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { searchMovies as searchMoviesAction } from '../../state/actions/movies';
import MoviesService from '../../services/movies';

function MovieSearch({searchMovies}) {
  const [query, setQuery] = React.useState('');
  let history = useHistory();

  async function submitSearch() {
    const response = await MoviesService.searchMovies(query);
    searchMovies(response.data);
    history.push('/search');
  }

  return (
    <div className="search-main-container">
      <div className="find-movie-container">
        <label htmlFor="movie-search">FIND YOUR MOVIE</label>
      </div>

      <div className="search-container">
        <input
          id="movie-search"
          className="input-search"
          type="text"
          placeholder="What do you want to watch?"
          onChange={(event) => { setQuery(event.target.value)}}
        />
        <button className="btn-search" type="button" onClick={submitSearch}>SEARCH</button>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    searchMovies: (movies) => {
      dispatch(searchMoviesAction(movies));
    }
  }
}

export default connect(null, mapDispatchToProps)(MovieSearch);