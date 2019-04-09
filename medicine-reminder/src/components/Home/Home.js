import React, { Component } from 'react';
import './Home.css';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
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
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const med = this.state.medicine.map((meds, key) => {
      return (
        <div key={key}>
          <Card className='card'>
            <CardBody>
              <CardTitle>
                <h3>{meds.name}</h3>
              </CardTitle>
              <CardText>Directions: {meds.directions}</CardText>
              <CardText>Servings: {meds.servings}</CardText>
              <CardText>Refill Left: {meds.refill_left}</CardText>
              <Button>More Details</Button>
            </CardBody>
          </Card>
        </div>
      );
    });
    return <div>{med}</div>;
  }
}

export default Home;
