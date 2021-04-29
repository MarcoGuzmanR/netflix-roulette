import React from 'react';
import { connect } from 'react-redux';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import MovieService from '../../services/movie';
import '@reach/dialog/styles.css';
import propTypes from 'prop-types';
import { deleteMovie } from '../../state/actions/movies';

function ModalMovieDelete({ showModal, setShowModal, movieId, refreshMovies }) {
  const close = () => setShowModal(false);

  async function deleteMovieAction() {
    const response = await MovieService.deleteMovie(movieId);

    refreshMovies(movieId);
    close();
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

function mapDispatchToProps(dispatch) {
  return {
    refreshMovies: (movieId) => {
      dispatch(deleteMovie(movieId));
    }
  }
}

export default connect(null, mapDispatchToProps)(ModalMovieDelete);