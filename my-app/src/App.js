import React from 'react';
import DrinkForm from "./components/DrinkForm";
import Drinks from "./components/Drinks";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>What Can I Get For You?</h1>
        <DrinkForm />
      </header>
      <div className="drinklist">
        <Drinks />
      </div>
    </div>
  );
}

export default App;
