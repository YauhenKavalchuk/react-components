import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TabBarNav.css';

const TabBarNav = ({ navLabel, className, onChangeActiveTab }) => {
  const classes = classNames(
    className,
    'nav-item',
  );

  return (
    <button
      type="button"
      className={classes}
      onClick={() => { onChangeActiveTab(navLabel); }}
    >
      {navLabel}
    </button>
  );
};

TabBarNav.propTypes = {
  navLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeActiveTab: PropTypes.func,
};

TabBarNav.defaultProps = {
  navLabel: 'Tab',
  className: '',
  onChangeActiveTab: () => {},
};

export default TabBarNav;
