import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../icon/Icon';
import Image from '../image/Image';

import './Chip.css';

const Chip = ({
  text,
  withImage,
  withIcon,
  withClose,
  imageSrc,
  imgAlt,
  iconName,
  className,
  onChipClick,
  onCloseClick,
  id,
}) => {
  const onChipClickAction = () => {
    onChipClick(id);
  };

  const onCloseClickAction = e => {
    e.stopPropagation();
    onCloseClick(e, id);
  };

  const classes = classNames(
    'chip',
    className,
  );

  return (
    <div className={classes} onClick={onChipClickAction}>
      {withImage
        && (
        <span className="chipImage">
          <Image src={imageSrc} alt={imgAlt} width={24} height={24} />
        </span>
        )
      }
      {withIcon
        && (
        <span className="chipIcon">
          <Icon name={iconName} />
        </span>
        )
      }
      <span className="chipText">{text}</span>
      {withClose
        && (
        <span className="chipClose" onClick={onCloseClickAction}>
          <Icon name="times" />
        </span>
        )
      }
    </div>
  );
};

Chip.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  withImage: PropTypes.bool,
  withIcon: PropTypes.bool,
  withClose: PropTypes.bool,
  imageSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  iconName: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onChipClick: PropTypes.func,
  onCloseClick: PropTypes.func,
};

Chip.defaultProps = {
  withImage: false,
  withIcon: false,
  withClose: false,
  className: '',
  imgAlt: '',
  iconName: 'user-tie',
  imageSrc: '',
  id: null,
  onChipClick: () => {},
  onCloseClick: () => {},
};

export default Chip;
