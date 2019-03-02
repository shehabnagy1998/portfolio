import React, { Component } from 'react';
import Sidemenu from './components/Sidemenu';
import Content from './components/Content';

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
