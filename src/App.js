import React from 'react';
import './App.css';

import MenuList from './MenuList';

function App() {
  return (
    <div className="App">
      <h1 className="App-heading">
        Making &<span> mixing great Cocktails </span>for
          special Guests
      </h1>
      <MenuList />
    </div>
  );
}

export default App;
