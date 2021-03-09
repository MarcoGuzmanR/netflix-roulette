import React from 'react';
import './details.css'
import MovieContext from '../../movieContext/context';

function MovieDetails() {
  const { movieDetails, setSearchPage } = React.useContext(MovieContext);

  return (
    <div className="details-main-container">
      <p onClick={() => setSearchPage(true)}>{movieDetails.id}</p>
    </div>
  );
};

export default MovieDetails;