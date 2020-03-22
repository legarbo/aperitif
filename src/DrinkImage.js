import React from 'react';
import './DrinkImage.css';

function DrinkImage({ src, name, width = 200, height = 200}) {
  return (
    <figure>
      <img src={src} alt={name} 
        style={{width: width + 'px', height: height + 'px'}} />
        <div className="bottom-left">
          <h3>{name}</h3>
        </div>
    </figure>
    )
}

export default DrinkImage;
