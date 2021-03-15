import React from 'react';
import './movieDelete.css';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import '@reach/dialog/styles.css';
import propTypes from 'prop-types';

function ModalMovieDelete({ showModal, setShowModal, movieId }) {
  const close = () => setShowModal(false);

  function deleteMovieAction() {
    console.log(`Delete movie with id: ${ movieId }`);
  }

  return (
    <div className="modal-container">
      <DialogOverlay aria-label="movie" isOpen={showModal} onDismiss={close}>
        <DialogContent aria-label="movie" className="modal-content">
          <div className="button-container">
            <button className="btn-close" onClick={close}>
              <span aria-hidden>×</span>
            </button>
          </div>

          <h1 className="modal-title">DELETE MOVIE</h1>
          <p>Are you sure you want to delete this movie?</p>

          <div className="button-container">
            <button className="btn-confirm" type="button" onClick={deleteMovieAction}>CONFIRM</button>
          </div>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
}

ModalMovieDelete.propTypes = {
  showModal: propTypes.bool.isRequired,
  setShowModal: propTypes.func.isRequired,
  movieId: propTypes.number.isRequired
};

export default ModalMovieDelete;