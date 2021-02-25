import React from 'react';
import './item.css';
import propTypes from 'prop-types';

function MovieItem({ movie }) {
  return (
    <div className="item-content">
      <p>{movie.title}</p>
      <img src={movie.poster_path} />
    </div>
  );
};

MovieItem.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired
  })
};

export default MovieItem;