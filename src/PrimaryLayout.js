import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrimaryHeader from './PrimaryHeader';
import AppHomePage from './AppHomePage';
import AppPortfolioPage from './AppPortfolioPage';
import AppContactPage from './AppContactPage';
import AppFaqPage from './AppFaqPage';
import './PrimaryLayout.css'; 

const PrimaryLayout = () => (
  <div className="PrimaryLayout">
    <PrimaryHeader />
      <h1 className="welcome">Welcome to Aperitif</h1>
      <main>
        <Switch>
          <Route exact path='/' component={AppHomePage} />
          <Route path="/portfolio" component={AppPortfolioPage} />
          <Route path="/contact" component={AppContactPage} />
          <Route path="/faq" component={AppFaqPage} />
        </Switch>
      </main>
  </div>
)

export default PrimaryLayout;
