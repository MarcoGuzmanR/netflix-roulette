import React from 'react';
import './movieForm.css';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import MovieService from '../../services/movie';
import '@reach/dialog/styles.css';
import propTypes from 'prop-types';

function ModalMovieForm({ showModal, setShowModal, editMovie = {} }) {
  const movieObj = {
    id:           editMovie?.id           || '',
    title:        editMovie?.title        || '',
    release_date: editMovie?.release_date || '',
    poster_path:  editMovie?.poster_path  || '',
    genres:       editMovie?.genres       || [],
    overview:     editMovie?.overview     || '',
    runtime:      editMovie?.runtime      || '',
  }

  const [movie, setMovie] = React.useState(movieObj);

  const close = () => setShowModal(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const response =
      movieObj.id ? await MovieService.updateMovie(movie) : await MovieService.createMovie(movie);

    if (response.data) {
      close();
      console.log(response.data);
    }
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

          <h1 className="modal-title">{ editMovie.id ? 'EDIT ' : 'ADD '}MOVIE</h1>
          <form onSubmit={handleSubmit}>
            <div className="row-container">
              <label>
                  <p className="input-label">TITLE</p>
                  <input
                    className="input-form-movie"
                    type="text"
                    placeholder="Title here"
                    onChange={(event) => setMovie({ ...movie, title: event.target.value })}
                    value={ movie.title }
                  />
              </label>
            </div>

            <div className="row-container">
              <label>
                  <p className="input-label">RELEASE DATE</p>
                  <input
                    className="input-form-movie"
                    type="text"
                    placeholder="Select Date"
                    onChange={(event) => setMovie({ ...movie, release_date: event.target.value })}
                    value={ movie.release_date }
                  />
              </label>
            </div>

            <div className="row-container">
              <label>
                  <p className="input-label">MOVIE URL</p>
                  <input
                    className="input-form-movie"
                    type="text"
                    placeholder="Movie URL here"
                    onChange={(event) => setMovie({ ...movie, poster_path: event.target.value })}
                    value={ movie.poster_path }
                  />
              </label>
            </div>

            <div className="row-container">
              <label>
                  <p className="input-label">GENRE</p>
                  <input
                    className="input-form-movie"
                    type="text"
                    placeholder="Select Genre"
                    onChange={(event) => setMovie({ ...movie, genres: event.target.value })}
                    value={ movie.genres }
                  />
              </label>
            </div>

            <div className="row-container">
              <label>
                  <p className="input-label">OVERVIEW</p>
                  <input
                    className="input-form-movie"
                    type="text"
                    placeholder="Overview here"
                    onChange={(event) => setMovie({ ...movie, overview: event.target.value })}
                    value={ movie.overview }
                  />
              </label>
            </div>

            <div className="row-container">
              <label>
                  <p className="input-label">RUNTIME</p>
                  <input
                    className="input-form-movie"
                    type="text"
                    placeholder="Overview here"
                    onChange={(event) => setMovie({ ...movie, runtime: event.target.value })}
                    value={ movie.runtime }
                  />
              </label>
            </div>

            <div className="button-container">
              <button className="btn-reset" type="button">RESET</button>
              <button className="btn-submit" type="submit">{ editMovie.id ? 'SAVE' : 'SUBMIT' }</button>
            </div>
          </form>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
}

ModalMovieForm.propTypes = {
  showModal: propTypes.bool.isRequired,
  setShowModal: propTypes.func.isRequired,
};

export default ModalMovieForm;