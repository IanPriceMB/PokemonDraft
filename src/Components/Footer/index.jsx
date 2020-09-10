import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => (
  <div className="footer" data-testid="Footer">
    <div className="footer__water-mark" data-testid="FooterWaterMark">
      Made by: Ian Price
    </div>
  </div>
);


Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;