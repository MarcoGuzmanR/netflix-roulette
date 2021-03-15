import React from 'react';
import './sortList.css'
import { Listbox, ListboxOption } from '@reach/listbox';
import "@reach/listbox/styles.css";

function MovieSort() {
  const [sortBy, setSortBy] = React.useState('release_date');

  return (
    <div className="sort-content">
      <span>SORT BY</span>
      <Listbox aria-labelledby="sort-by" value={sortBy} onChange={setSortBy}>
        <ListboxOption value="release_date">RELEASE DATE</ListboxOption>
        <ListboxOption value="title">TITLE</ListboxOption>
        <ListboxOption value="vote_count">VOTE COUNT</ListboxOption>
        <ListboxOption value="vote_average">VOTE AVERAGE</ListboxOption>
      </Listbox>
    </div>
  );
};

export default MovieSort;