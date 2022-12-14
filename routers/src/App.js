import React from 'react'
import {Route,Routes } from 'react-router-dom';
import './App.css';
import Explore from './js files/welcomepage';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/'element={<Explore />}/>
        </Routes>
    </div>
  );
}

export default App;
