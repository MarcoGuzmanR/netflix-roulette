import React from 'react';
import './movie-form.css';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

function ModalMovieForm({ showModal, setShowModal }) {
  const close = () => setShowModal(false);

  return (
    <div>
      <Dialog aria-label="movie" isOpen={showModal} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </div>
  );
}

export default ModalMovieForm;