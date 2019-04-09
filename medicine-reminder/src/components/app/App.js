import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';
import MedicineDetails from '../MedicineDetails/MedicineDetails';
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
        <Route path='/medicine-detail' component={MedicineDetails} />
      </div>
    );
  }
}

export default App;
