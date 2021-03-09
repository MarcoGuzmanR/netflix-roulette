import React from 'react';
import './details.css'
import MovieContext from '../../movieContext/context';

function MovieDetails() {
  const { movieDetails, setSearchPage } = React.useContext(MovieContext);

  return (
    <div className="details-main-container">
      <div className="search-back-container">
        <button type="button" className="btn-search-back" onClick={() => setSearchPage(true)}>
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

export default MovieDetails;