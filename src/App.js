import React from 'react'
import './App.css';

import HomePage from './views/HomePage';
import About from './views/About'
import CountryPage from './views/CountryPage';
import NavBar from './components/NavBar.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  typography: {
    fontFamily: [
      // '-apple-system',
      // '"Segoe UI"',
      // 'Roboto',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NavBar/>
          <div>
            <Switch>
              <Route exact path="/">
                <HomePage />
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
    </ThemeProvider>
  );
}

export default App;
