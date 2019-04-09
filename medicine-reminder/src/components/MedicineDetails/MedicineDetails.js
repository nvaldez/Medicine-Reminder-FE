import React, { Component } from 'react';
const axios = require('axios');

class MedicineDetails extends Component {
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
    const med = this.state.medicine.map(meds => {
      return <div>{meds.name}</div>;
    });
    return (
      <div>
        <h1>Med detail</h1>
        {med}
      </div>
    );
  }
}

export default MedicineDetails;
