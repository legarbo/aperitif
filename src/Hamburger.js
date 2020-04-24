import React, { Component } from 'react';
import './Hamburger.css';
import classNames from 'classnames';

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = { transformed: false , styles: ''};
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
    let hambButton = classNames({
      'hamburger': true,
      'transformed': this.state.transformed
    });
    let secondLine = classNames({
      'line': true,
      'secondLine': this.state.transformed
    });

    return (
      <div>
        <div className={hambButton} onClick={this.handleClick}>
            <div className="line"></div>
            <div className={secondLine}
                style={{animation: this.state.styles}}>
            </div>
            <div className="line"></div>
        </div>
      </div>
    )
  }
}

export default Hamburger;
