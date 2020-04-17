import React from 'react';
import './DrinkImage.css';

function DrinkImage({ src, name, onClick, width = 200, height = 200}) {
  return (
    <figure>
      <img src={src} alt={name} 
        style={{width: width + 'px', height: height + 'px'}} onClick={onClick} />
      <figcaption>{name}</figcaption>
    </figure>
    )
}

export default DrinkImage;
