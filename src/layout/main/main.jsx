import React from 'react';
import PropTypes from 'prop-types';
import './main.css';

const Main = ({ children }) => (
  <div className="main">
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
