import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';
import MedicineDetails from '../MedicineDetails/MedicineDetails';
import Home from '../Home/Home';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { medicine: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/medications')
      .then(response => {
        this.setState({ medicine: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
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
