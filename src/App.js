import React from 'react'
import './App.css';
import HomepageContainer from './components/HomepageContainer';
import Nav from './components/Nav.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <HomepageContainer />
    </div>
  );
}

export default App;
