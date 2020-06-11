import React from 'react';
import logo from './logo.svg';
import './App.css';

import Games from './games';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Games></Games>
      </header>
    </div>
  );
}

export default App;
