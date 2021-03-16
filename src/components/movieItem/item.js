import React from 'react';
import './item.css';
import { connect } from 'react-redux';
import { Menu, MenuButton, MenuList, MenuItem } from '@reach/menu-button';
import "@reach/menu-button/styles.css";
import ModalMovieForm from '../modals/movieForm';
import ModalMovieDelete from '../modals/movieDelete';
import { useMovieDetails } from '../../hooks/customHooks';
import { setShowSearch as setShowSearchAction } from '../../state/actions/searchToggle';
import propTypes from 'prop-types';

function MovieItem({ movie, setShowSearch }) {
  const [, setMovieDetails] = useMovieDetails();

  const [showFormModal, setShowFormModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  function setToggleSearchAndDetails() {
    setMovieDetails(movie);
    setShowSearch(false);
  }

  return (
    <div className="item-container">
      <div className="menu-action">
        <Menu>
          <MenuButton>Actions</MenuButton>
          <MenuList>
            <MenuItem onSelect={() => { setShowFormModal(true) }}>Edit</MenuItem>
            <MenuItem onSelect={() => { setShowDeleteModal(true) }}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </div>

      <div className="movie-container" onClick={setToggleSearchAndDetails}>
        <img src={movie.poster_path} height="461" width="337" />

        <div className="title-content">
          <p className="movie-title">{movie.title}</p>
          <span className="movie-date">{new Date(movie.release_date).getFullYear()}</span>
        </div>

        <p className="movie-genres">{movie.genres.join(', ')}</p>
      </div>

      <ModalMovieForm
        showModal={showFormModal}
        setShowModal={setShowFormModal}
        editMovie={movie}
      />
      <ModalMovieDelete
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        movieId={movie.id}
      />
    </div>
  );
};

MovieItem.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired
  })
};

function mapDispatchToProps(dispatch) {
  return {
    setShowSearch: (toggleValue) => {
      dispatch(setShowSearchAction(toggleValue));
    }
  }
}

export default connect(null, mapDispatchToProps)(MovieItem);