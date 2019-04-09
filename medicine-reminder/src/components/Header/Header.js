import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Doctor from '../Doctor/Doctor';
import Medicine from '../Medicine/Medicine';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <div>
            <h1>Logo</h1>
          </div>
          <div>
            <nav>
              <ul>
                <Link className='link' to='/home'>
                  Home
                </Link>
                <Link className='link' to='/medicine'>
                  Medicines
                </Link>
                <Link className='link' to='/doctor'>
                  Doctor
                </Link>
              </ul>
            </nav>
          </div>
        </div>
        <Route path='/home' component={Home} />
        <Route path='/medicine' component={Medicine} />
        <Route path='/doctor' component={Doctor} />
      </div>
    );
  }
}

export default Header;
