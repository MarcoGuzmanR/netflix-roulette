import React from 'react';

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      There was an error: { error.message }
    </div>
  );
}

export default ErrorFallback;