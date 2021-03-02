import React from 'react';
import './add.css';
import ModalMovieForm from '../modal/movie-form';

function MovieAdd() {
  const [show, setShow] = React.useState(false);
  const open = () => setShow(true);

  return (
    <div className="new-movie-container">
      <button type="button" className="btn-add" onClick={open}>+ ADD MOVIE</button>
      <ModalMovieForm showModal={show} setShowModal={setShow} />
    </div>
  );
}

export default MovieAdd;