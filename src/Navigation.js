import React,{ Component } from 'react';
import { FaHome, FaBriefcase, FaQuestion } from 'react-icons/fa';
import { MdContactMail} from 'react-icons/md';
import './Navigation.css';
import Hamburger from './Hamburger';

class Navigation extends Component {
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
      <div>
        <div className="nav">
            <Hamburger 
              className="hamburger"
              transformed={this.state.transformed} 
              styles={this.state.styles} 
              onClick={this.handleClick}
            />
            <div className="logo">LeGarbo</div>
            { this.state.transformed
            ? <div className="nav-links">
              <div><a href="#home"><FaHome /></a></div>
                <div><a href="#portfolio"><FaBriefcase /> Portfolio</a></div>
                  <div><a href="#contact"><MdContactMail /></a></div>
                    <div><a href="#faq"><FaQuestion /></a></div>  
            </div>
                : null
            }
        </div>
        <h1 className="heading">Let Us Master<span>This!!!</span></h1>
      </div>
    )
  }
}

export default Navigation;
