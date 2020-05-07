import React from 'react';
import './Spinner.css';

function Spinner(props) {
  return (
      <div className="Spinner">
        <i className="far fa-8x fas fa-cocktail fa-spin"></i>
        <h1 className="title">Loading...</h1>
      </div>
  );
}

export default Spinner;
