import React from 'react';
import styles from './movieForm.module.css';
import { connect } from 'react-redux';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import MovieService from '../../services/movie';
import '@reach/dialog/styles.css';
import propTypes from 'prop-types';
import { useFormik } from 'formik';
import { addMovie, updateMovie } from '../../state/actions/movies';

function ModalMovieForm({ showModal, setShowModal, editMovie = {}, refreshMoviesAdd, refreshMoviesUpdate }) {
  const movieObj = {
    title:        editMovie?.title        || '',
    release_date: editMovie?.release_date || '',
    poster_path:  editMovie?.poster_path  || '',
    genres:       editMovie?.genres       || [],
    overview:     editMovie?.overview     || '',
    runtime:      editMovie?.runtime      || '',
  }

  if (editMovie.id) {
    movieObj.id = editMovie.id;
  }

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Title is required';
    }

    if (!values.poster_path) {
      errors.poster_path = 'Movie URL is required';
    }
    else if (!/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(values.poster_path)) {
      errors.poster_path = 'Invalid Movie URL';
    }

    if (!values.overview) {
      errors.overview = 'Overview is required';
    }

    if (!values.runtime) {
      errors.runtime = 'Runtime is required';
    }

    if (!values.genres.length) {
      errors.genres = 'Genres is required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: movieObj,
    validate,
    onSubmit: async (values) => {
      let response;

      if (editMovie.id) {
        response = await MovieService.updateMovie(values);
        refreshMoviesUpdate(response.data);
      }
      else {
        response = await MovieService.createMovie(values);
        refreshMoviesAdd(response.data);
      }

      if (response.data) {
        close();
      }
    }
  });

  const close = () => setShowModal(false);

  return (
    <div className="modal-container">
      <DialogOverlay aria-label="movie" isOpen={showModal} onDismiss={close}>
        <DialogContent aria-label="movie" className={styles['modal-content']}>
          <div className={styles['button-container']}>
            <button className="btn-close" onClick={close}>
              <span aria-hidden>×</span>
            </button>
          </div>

          <h1 className={styles['modal-title']}>{ editMovie.id ? 'EDIT ' : 'ADD '}MOVIE</h1>
          <form onSubmit={formik.handleSubmit}>
            {editMovie.id ?
              (<div className={styles['row-container']}>
                <label>
                    <p className={styles['input-label']}>MOVIE ID</p>
                    <input
                      className={styles['input-form-movie']}
                      name="id"
                      type="text"
                      value={ formik.values.id }
                      disabled
                    />
                </label>
              </div>
              ) : null
            }

            <div className={styles['row-container']}>
              <label>
                  <p className={styles['input-label']}>TITLE*</p>
                  <input
                    className={styles['input-form-movie']}
                    name="title"
                    type="text"
                    placeholder="Title here"
                    onChange={ formik.handleChange }
                    value={ formik.values.title }
                  />
              </label>
              { formik.errors.title ? <p className={styles['error-message']}>{ formik.errors.title }</p> : null }
            </div>

            <div className={styles['row-container']}>
              <label>
                  <p className={styles['input-label']}>RELEASE DATE</p>
                  <input
                    className={styles['input-form-movie']}
                    name="release_date"
                    type="text"
                    placeholder="Select Date"
                    onChange={ formik.handleChange }
                    value={ formik.values.release_date }
                  />
              </label>
            </div>

            <div className={styles['row-container']}>
              <label>
                  <p className={styles['input-label']}>MOVIE URL*</p>
                  <input
                    className={styles['input-form-movie']}
                    name="poster_path"
                    type="text"
                    placeholder="Movie URL here"
                    onChange={ formik.handleChange }
                    value={ formik.values.poster_path }
                  />
              </label>
              { formik.errors.poster_path ? <p className={styles['error-message']}>{ formik.errors.poster_path }</p> : null }
            </div>

            <div className={styles['row-container']}>
              <label>
                  <p className={styles['input-label']}>GENRES*</p>
                  <input
                    className={styles['input-form-movie']}
                    name="genres"
                    type="text"
                    placeholder="Select Genre"
                    onChange={ (event) => { formik.setFieldValue('genres', event.target.value.split(',')) } }
                    value={ formik.values.genres }
                  />
              </label>
              { formik.errors.genres ? <p className={styles['error-message']}>{ formik.errors.genres }</p> : null }
            </div>

            <div className={styles['row-container']}>
              <label>
                  <p className={styles['input-label']}>OVERVIEW*</p>
                  <input
                    className={styles['input-form-movie']}
                    name="overview"
                    type="text"
                    placeholder="Overview here"
                    onChange={ formik.handleChange }
                    value={ formik.values.overview }
                  />
              </label>
              { formik.errors.overview ? <p className={styles['error-message']}>{ formik.errors.overview }</p> : null }
            </div>

            <div className={styles['row-container']}>
              <label>
                  <p className={styles['input-label']}>RUNTIME*</p>
                  <input
                    className={styles['input-form-movie']}
                    name="runtime"
                    type="text"
                    placeholder="Runtime here"
                    onChange={ (event) => { formik.setFieldValue('runtime', parseInt(event.target.value)) } }
                    value={ formik.values.runtime }
                  />
              </label>
              { formik.errors.runtime ? <p className={styles['error-message']}>{ formik.errors.runtime }</p> : null }
            </div>

            <div className={styles['button-container']}>
              <button className="btn-reset" type="button" onClick={formik.handleReset}>RESET</button>
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

function mapDispatchToProps(dispatch) {
  return {
    refreshMoviesAdd: (movie) => {
      dispatch(addMovie(movie));
    },
    refreshMoviesUpdate: (movie) => {
      dispatch(updateMovie(movie));
    }
  }
}

export default connect(null, mapDispatchToProps)(ModalMovieForm);