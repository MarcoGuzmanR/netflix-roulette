import React from 'react';
import styles from './add.module.css';
import ModalMovieForm from '../modals/movieForm';

function MovieAdd() {
  const [show, setShow] = React.useState(false);
  const open = () => setShow(true);

  return (
    <div className={styles['new-movie-container']}>
      <button type="button" className="btn-add" onClick={open}>+ ADD MOVIE</button>
      <ModalMovieForm showModal={show} setShowModal={setShow} />
    </div>
  );
}

export default MovieAdd;