/* eslint-disable */
import React, { Fragment } from 'react';
import Tooltip from './Tooltip';
import Button from '../button/Button';

const Sandbox = () => (
  <Fragment>
    <h2><span>1. Simple Right tooltip with big description:</span></h2>
    <Tooltip
      position="right"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
    >
      Test
    </Tooltip>

    <h2><span>2. Left tooltip with outer styles:</span></h2>
    <Tooltip
      position="left"
      content="Simple small text"
      style={{ width: '120px' }}
    >
      Test
    </Tooltip>

    <h2><span>3. Bottom tooltip of custom component:</span></h2>
    <Tooltip
      position="bottom"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
    >
      <Button>Exit</Button>
    </Tooltip>

    <h2><span>4. Top tooltip of text element:</span></h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    <Tooltip
      position="top"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
    >
      <span style={{ textDecoration: 'underline', padding: '0 4px' }}>Lorem</span>
    </Tooltip>
    Ipsum has been the industry's standard dummy text ever since the 1500s</p>
  </Fragment>
);

export default Sandbox;
/* eslint-enable */
