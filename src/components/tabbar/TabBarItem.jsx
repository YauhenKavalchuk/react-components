import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TabBarItem.css';

const TabBarItem = ({
  children, label, activeTab, ...attrs
}) => {
  const classes = classNames(
    'tab-bar-item',
    { active: activeTab === label },
  );

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

TabBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  activeTab: PropTypes.string,
};

TabBarItem.defaultProps = {
  children: null,
  activeTab: '',
};

export default TabBarItem;
