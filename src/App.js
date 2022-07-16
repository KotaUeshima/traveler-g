import React from 'react'
import './App.css';
import Home from './views/Home';
import ResponsiveAppBar from './components/Nav.js'
import About from './views/About'
import CountryPage from './views/CountryPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/:id">
              <CountryPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
