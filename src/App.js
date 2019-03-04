import React, { Component } from 'react';
import Sidemenu from './components/Sidemenu';
import Content from './components/Content';
import 'bootstrap'
import { CSSTransition } from 'react-transition-group'
import WOW from 'wowjs'

class App extends Component {

  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <article className="app">
        <Sidemenu />
        <Content />
      </article>
    );
  }
}

export default App;
