import React from 'react';
import { FaHome, FaBriefcase, FaQuestion } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './Navigation.css';

import MenuListContainer from './MenuListContainer';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Faq from './Faq';

export default function RouterContainer() {
  return (
    <Router>
      <div>
        <ul className="nav-links">
          <li>
            <Link to="/"><FaHome /></Link>
          </li>
          <li>
            <Link to="/portfolio"><FaBriefcase /> Porfolio</Link>
          </li>
          <li>
            <Link to="/contact"><MdContactMail /></Link>
          </li>
          <li>
            <Link to="/faq"><FaQuestion /></Link>
          </li>
        </ul>

        <Switch>
           <Route path="/portfolio">
             <Portfolio />
           </Route>
           <Route path="/contact">
             <Contact />
           </Route>
           <Route path="/faq">
             <Faq />
            </Route>
            <Route path="/">
              <MenuListContainer />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}
