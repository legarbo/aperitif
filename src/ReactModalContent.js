import React, { Fragment } from 'react';
import './ReactModal.css';

const ReactModalContent = ({ ingredients, onClick, imgSrc, caption, insts, id }) => {
  return (
    <Fragment>
      <div className="closeModal">
        <button 
          className="closeModal__button"
          onClick={onClick}>✕</button>
      </div>
      <div className="ingredients">
        <h3 className="ingredients__title">Ingredients</h3>
          <ul className="ingredients__list">
            {ingredients.map((i, index) => (
              <li key={index}><i className="fas fa-cocktail"></i>{i}</li>
            ))}
          </ul>
      </div>
      <div className="imgWrapper">
        <img 
            src={imgSrc} 
            width="25%"
            height="25%"
            alt={caption}
            id={id}
        />
        <h3 className="imgWrapper__caption">{caption}</h3>
      </div>
      <div className="instructions">
        <h3 className="instructions__title">Instructions</h3>
        <p className="instructions__text">{insts}</p>
      </div>
    </Fragment>
  )
}

export default ReactModalContent;
