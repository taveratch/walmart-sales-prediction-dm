import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer} from 'mobx-react'

@observer
class App extends Component {
  _setName = () => {
    let firstnameRef = this.refs['firstname']
    let lastnameRef = this.refs['lastname']
    let firstname = firstnameRef.value
    let lastname = lastnameRef.value
    firstname ? this.props.store.setFirstname(firstname) : () => {}
    lastname ? this.props.store.setLastname(lastname) : () => {}
    firstnameRef.value = ''
    lastnameRef.value = ''
  }
  render() {
    console.log(this.props.store);
    return (
      <div className="App">
        <input ref="firstname" />
        <input ref="lastname"/>
        <button onClick={this._setName}>Change</button>
        <div>
          <h3>{`My name is ${this.props.store.name}`}</h3>
        </div>
      </div>
    );
  }
}

export default App;
