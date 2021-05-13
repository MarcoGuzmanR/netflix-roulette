import React from 'react';
import styles from './notFound.module.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>Page Not Found</h1>
      <h2>404</h2>
      <button type="button" className="btn-confirm">
        <Link to="/">GO BACK TO HOME</Link>
      </button>
    </div>
  );
}

export default NotFound;