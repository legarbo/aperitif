import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PrimaryLayout from './PrimaryLayout';

const App = props => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)


export default App;
