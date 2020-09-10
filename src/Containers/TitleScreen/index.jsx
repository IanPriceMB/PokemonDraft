import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TitleScreen = () => (
  <h1 className="TitleScreen" data-testid="TitleScreen">
    <Link to="/home">Home</Link>
  </h1>
);


TitleScreen.propTypes = {};

TitleScreen.defaultProps = {};

export default TitleScreen;