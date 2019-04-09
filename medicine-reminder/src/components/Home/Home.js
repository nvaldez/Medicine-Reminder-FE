import React, { Component } from 'react';
import './Home.css';
import MedicineDetails from '../MedicineDetails/MedicineDetails';
import { Route, Link } from 'react-router-dom';

import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardDeck,
  CardFooter,
  Button,
} from 'reactstrap';
const axios = require('axios');

class Home extends Component {
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
    const med = this.state.medicine.map((meds, key) => {
      return (
        <div className='home' key={key}>
          <Card className='card'>
            <CardHeader>
              <h3>{meds.name}</h3>
            </CardHeader>
            <CardBody>
              <CardText>Directions: {meds.directions}</CardText>
              <CardText>Servings: {meds.servings}</CardText>
              <CardText>Refill Left: {meds.refill_left}</CardText>
            </CardBody>
            <CardFooter>
              <Link to='/medicine-detail'>More Details</Link>
            </CardFooter>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <CardDeck>{med}</CardDeck>
      </div>
    );
  }
}

export default Home;
