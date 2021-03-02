import React from 'react';
import './item.css';
import ModalMovieForm from '../modal/movie-form';
import propTypes from 'prop-types';

function MovieItem({ movie }) {
  const [show, setShow] = React.useState(false);
  const open = () => setShow(true);

  return (
    <div className="item-content">
      <img src={movie.poster_path} height="461" width="337" />
      <p>{movie.title}</p>
      <button type="button" onClick={open}>Edit Movie</button>
      <ModalMovieForm showModal={show} setShowModal={setShow} editMovie={movie} />
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