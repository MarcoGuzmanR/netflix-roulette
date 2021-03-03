import React from 'react';
import './item.css';
import { Menu, MenuButton, MenuList, MenuItem } from '@reach/menu-button';
import "@reach/menu-button/styles.css";
import ModalMovieForm from '../modals/movie-form';
import ModalMovieDelete from '../modals/movie-delete';
import propTypes from 'prop-types';

function MovieItem({ movie }) {
  const [showFormModal, setShowFormModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const openFormModal = () => setShowFormModal(true);
  const openDeleteModal = () => setShowDeleteModal(true);

  return (
    <div className="item-container">
      <div className="menu-action">
        <Menu>
          <MenuButton>Actions</MenuButton>
          <MenuList>
            <MenuItem onSelect={openFormModal}>Edit</MenuItem>
            <MenuItem onSelect={openDeleteModal}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <img src={movie.poster_path} height="461" width="337" />
      <p>{movie.title}</p>

      <ModalMovieForm showModal={showFormModal} setShowModal={setShowFormModal} editMovie={movie} />
      <ModalMovieDelete showModal={showDeleteModal} setShowModal={setShowDeleteModal} movieId={movie.id} />
    </div>
  );
};

MovieItem.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired
  })
};

export default MovieItem;