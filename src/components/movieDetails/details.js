import React from 'react';
import './details.css'
import { connect } from 'react-redux';
import { setShowSearch as setShowSearchAction } from '../../state/actions/searchToggle';
import { useMovieDetails } from '../../hooks/customHooks';

function MovieDetails({ setShowSearch }) {
  const [movieDetails]    = useMovieDetails();

  return (
    <div className="details-main-container">
      <div className="search-back-container">
        <button type="button" className="btn-search-back" onClick={() => setShowSearch(true)}>
          BACK TO SEARCH
        </button>
      </div>

      <div className="details-container">
        <div className="poster-container">
          <img src={movieDetails.poster_path} height="461" width="337" />
        </div>
        <div className="info-container">
          <div className="title-container">
            <span className="title-details">{movieDetails.title}</span>
            <span className="average-details">{movieDetails.vote_average}</span>
            <p className="genres">{movieDetails.genres.join(', ')}</p>
          </div>
          <div className="date-container">
            <span>{new Date(movieDetails.release_date).getFullYear()}</span>
            <span>{movieDetails.runtime} min</span>
          </div>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setShowSearch: (toggleValue) => {
      dispatch(setShowSearchAction(toggleValue));
    }
  }
}

export default connect(null, mapDispatchToProps)(MovieDetails);