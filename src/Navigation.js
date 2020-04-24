import React from 'react';
import './Navigation.css';
import Hamburger from './Hamburger';

function Navigation(props) {
  return (
    <div>
      <div className="nav">
        <div className="nav-header">
          <Hamburger />
        </div>
      </div>
      <h1 className="heading">Let Us Master<span>This!!!</span></h1>
    </div>
  )
}

export default Navigation;


