import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListGroup.css';

const ListGroup = ({
  children, className, tag: Tag, ...attrs
}) => {
  const classes = classNames(
    'list-group',
    className,
  );

  return (
    <Tag className={classes} {...attrs}>
      {children}
    </Tag>
  );
};

ListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ListGroup.defaultProps = {
  children: null,
  className: '',
  tag: 'ul',
};

export default ListGroup;
