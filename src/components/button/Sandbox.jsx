/* eslint-disable */
import React, { Fragment } from 'react';
import Button from './Button';

const Sandbox = () => (
  <Fragment>

    <h2><span>1. Text and onClick function:</span></h2>
    <Button onClick={() => { console.log('!!!!'); }}>Button text</Button>

    <h2><span>2. Disabled button:</span></h2>
    <Button onClick={() => { console.log('!!!!'); }} disabled />

    <h2><span>3. Active button:</span></h2>
    <Button active />

    <h2><span>4. Supporting data, type and etc. attributes:</span></h2>
    <Button data-name="button" />
    <Button type="submit" />

    <h2><span>5. Button link</span></h2>
    <Button href="test">Link</Button>
    <Button href="test" disabled>Link</Button>

  </Fragment>
);

export default Sandbox;
/* eslint-enable */
