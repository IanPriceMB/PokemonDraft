import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeScreen = () => (
  <div className="homeScreen" data-testid="HomeScreen">
    <Link to="/game">Start Game</Link>
    <Link to="/">Title Screen</Link>
  </div>
);


HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;