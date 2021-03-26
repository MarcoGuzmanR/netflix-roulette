import React from 'react';
import './notFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container">
      <p>Page Not Found</p>
      <p>404</p>
      <button type="button" className="btn-confirm">
        <Link to="/">GO BACK TO HOME</Link>
      </button>
    </div>
  );
}

export default NotFound;