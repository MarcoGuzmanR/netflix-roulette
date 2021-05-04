import React from 'react';
import styles from './search.module.css';
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
    history.push({
      pathname: '/search',
      search: `?${query}`
    });
  }

  return (
    <div className={styles['search-main-container']}>
      <div className={styles['find-movie-container']}>
        <label htmlFor="movie-search">FIND YOUR MOVIE</label>
      </div>

      <div className={styles['search-container']}>
        <input
          id="movie-search"
          className={styles['input-search']}
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