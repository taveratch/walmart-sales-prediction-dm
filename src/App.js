import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer} from 'mobx-react'
import WeeklyGraph from './components/weekly-graph';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Walmart Weekly Sales Prediction</h3>
        <WeeklyGraph />
      </div>
    );
  }
}

export default App;
