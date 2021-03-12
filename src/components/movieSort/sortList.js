import React from 'react';
import './sortList.css'
import { connect } from 'react-redux';
import { Listbox, ListboxOption } from '@reach/listbox';
import "@reach/listbox/styles.css";
import { sortMovies as sortMoviesAction } from '../../state/actions/movies';
import MoviesService from '../../services/movies';

function MovieSort({ sortMovies }) {
  const [sortBy, setSortBy] = React.useState('release_date');

  async function submitSorting(sortField) {
    setSortBy(sortField);

    const response = await MoviesService.sortMovies(sortField);
    sortMovies(response.data);
  }

  return (
    <div className="sort-content">
      <span>SORT BY</span>
      <Listbox aria-labelledby="sort-by" value={sortBy} onChange={(value) => submitSorting(value)}>
        <ListboxOption value="release_date">RELEASE DATE</ListboxOption>
        <ListboxOption value="title">TITLE</ListboxOption>
        <ListboxOption value="vote_count">VOTE COUNT</ListboxOption>
        <ListboxOption value="vote_average">VOTE AVERAGE</ListboxOption>
      </Listbox>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    sortMovies: (movies) => {
      dispatch(sortMoviesAction(movies));
    }
  }
}

export default connect(null, mapDispatchToProps)(MovieSort);