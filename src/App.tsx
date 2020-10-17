/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { Component } from 'react';
import MainPage from './pages/MainPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
