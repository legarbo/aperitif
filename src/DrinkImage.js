import React from 'react';
import './DrinkImage.css';

function DrinkImage({ src, name, onClick, width = 200, height = 200}) {
  return (
    <div className="menu-list-item">
      <div className="menu-list-item-image">
        <img src={src} alt={name} 
          style={{width: width + 'px', height: height + 'px'}} />
          <div className="caption" onClick={onClick}>
            <h3>{name}</h3>
            <p>more...</p>
          </div>
      </div>
    </div>
    )
}

export default DrinkImage;
