import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBriefcase, FaQuestion } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import './PrimaryHeader.css';

import Hamburger from './Hamburger';

class PrimaryHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { transformed: false, styles: ''};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.transformed) {
      this.setState({
        transformed: false,
        styles: 'appear 350ms ease-in forwards'
      })
    } else {
        this.setState({
          transformed: true,
          styles: 'disappear 350ms ease-in forwards'
        })
    }
  }

  render() {
    return (
      <div className="PrimaryHeader">
          <Hamburger 
            className="hamburger"
            transformed={this.state.transformed}
            styles={this.state.styles}
            onClick={this.handleClick}
          />
          <div className="logo">LeGarbo</div>
            { this.state.transformed 
            ? 
            <nav className="Nav">
              <NavLink to="/" exact activeClassName="active"><FaHome /></NavLink>
              <NavLink to="/portfolio" activeClassName="active"><FaBriefcase /></NavLink>
              <NavLink to="/contact" activeClassName="active"><MdContactMail /></NavLink>
              <NavLink to="/faq" activeClassName="active"><FaQuestion /></NavLink>
            </nav>
            : null
            }
    </div>
    );
  }
}

export default PrimaryHeader;
