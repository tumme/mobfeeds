/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { Component } from 'react';
import MainPage from './pages/MainPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { HashRouter, Route } from 'react-router-dom';
import TransportationStatusPage from './pages/TransportationStatusPage';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/transport' component={TransportationStatusPage} />
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
