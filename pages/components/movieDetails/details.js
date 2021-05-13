import React from 'react';
import styles from './details.module.css';
import { connect } from 'react-redux';
import { setShowSearch as setShowSearchAction } from '../../state/actions/searchToggle';

function MovieDetails({ movieDetails, setShowSearch }) {
  return (
    <div className="details-main-container">
      <div className={styles['search-back-container']}>
        <button type="button" className="btn-search-back" onClick={() => setShowSearch(true)}>
          BACK TO SEARCH
        </button>
      </div>

      <div className={styles['details-container']}>
        <div className="poster-container">
          <img src={movieDetails.poster_path} height="461" width="337" />
        </div>
        <div className={styles['info-container']}>
          <div className={styles['title-container']}>
            <span className={styles['title-details']}>{movieDetails.title}</span>
            <span className={styles['average-details']}>{movieDetails.vote_average}</span>
            <p className={styles['genres']}>{movieDetails.genres?.join(', ')}</p>
          </div>
          <div className={styles['date-container']}>
            <span>{new Date(movieDetails.release_date).getFullYear()}</span>
            <span>{movieDetails.runtime} min</span>
          </div>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { movieDetails } = state.movieDetailsState;

  return { movieDetails };
}

function mapDispatchToProps(dispatch) {
  return {
    setShowSearch: (toggleValue) => {
      dispatch(setShowSearchAction(toggleValue));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);