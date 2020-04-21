import React from 'react';
import './Navigation.css';

function Navigation(props) {
  return (
    <div>
      <ul className="topnav">
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="right"><a href="#about">About</a></li>
      </ul>
        <h1 className="heading">Let Us Master<span>This!!!</span></h1>
    </div>
  )
}

export default Navigation;


