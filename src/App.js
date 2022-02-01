import React, { Component } from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './page/Home/index';
import Guns from './page/Guns/index'
import Modal from '../src/components/Modal'

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" render={ () => <Home /> } />
        <Route path="/armas" component={ Guns } />
        <Route path="/modal" component={ Modal } />
      </>
    );
  }
}

export default App;
