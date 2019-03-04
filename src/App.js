import React, { Component } from 'react';
import Sidemenu from './components/Sidemenu';
import Content from './components/Content';
import 'bootstrap'
import { CSSTransition } from 'react-transition-group'

class App extends Component {
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
