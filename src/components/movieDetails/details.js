import React from 'react';
import './details.css'
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { setShowSearch as setShowSearchAction } from '../../state/actions/searchToggle';

function MovieDetails() {
  const { state } = useLocation();
  const { movieDetails } = state;

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