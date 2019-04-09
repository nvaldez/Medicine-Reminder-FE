import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div className='App'>
        <Header />
        <Route
          exact
          path='/'
          render={props => <Home {...props} {...this.state} />}
        />
      </div>
    );
  }
}

export default App;
