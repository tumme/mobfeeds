/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { Component } from 'react';
import MainPage from './pages/MainPage';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainPage />
      </div>
    );
  }
}

export default App;
