import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <h4>Hello, Welcome to React</h4>
      </div>
    )
    return (
        <App/>
    );
  }
}

export default App;