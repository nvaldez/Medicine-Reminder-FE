import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home/Home';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <Route path='/' component={Home} />
        <h1>Header is working</h1>
      </div>
    );
  }
}

export default Header;
