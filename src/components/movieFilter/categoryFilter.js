import React from 'react';
import './categoryFilter.css'
import { connect } from 'react-redux';
import MoviesService from '../../services/movies';
import { filterMovies as filterMoviesAction } from '../../state/actions/movies';

function MovieFilter({ filterMovies }) {
  async function applyFilter(filter) {
    const response = await MoviesService.filterMovies(filter);

    if (response.data) {
      filterMovies(response.data);
    }
  }

  return (
    <div className="filter-container">
      <span onClick={() => applyFilter()}>ALL</span>
      <span onClick={() => applyFilter('Documentary')}>DOCUMENTARY</span>
      <span onClick={() => applyFilter('Comedy')}>COMEDY</span>
      <span onClick={() => applyFilter('Horror')}>HORROR</span>
      <span onClick={() => applyFilter('Crime')}>CRIME</span>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    filterMovies: (movies) => {
      dispatch(filterMoviesAction(movies));
    }
  }
}

export default connect(null, mapDispatchToProps)(MovieFilter)