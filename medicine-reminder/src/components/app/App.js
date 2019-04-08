import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:8000/medications')
      .then(res => res.json())
      .then(res => console.log(res));
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
