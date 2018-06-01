import React, { Component } from 'react';
import './App.css';
import Header from './component/header/Header';
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Wizard />
      </div>
    );
  }
}

export default App;
