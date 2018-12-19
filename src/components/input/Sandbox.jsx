/* eslint-disable */
import React from 'react';
import Input from './Input';

const Sandbox = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }}>

    <h2><span>1. Base Input type text:</span></h2>
    <Input id="text" type="text" />

    <h2><span>2. Input type number (with label):</span></h2>
    <Input id="number" label="select number" type="number" />

    <h2><span>3. Input type password (with error):</span></h2>
    <Input id="password" error="wrong password" type="password" />

    <h2><span>4. Input type week (with label and error):</span></h2>
    <Input id="week" label="week" error="wrong week" type="week" />

    <h2><span>5. Input type date (requered):</span></h2>
    <Input id="date" required type="date" />

    <h2><span>6. Input type file (label & required):</span></h2>
    <Input id="file" label="file" required type="file" />

    <h2><span>7. Input type color:</span></h2>
    <Input id="color" type="color" />

    <h2><span>8. Input type range (default value is 80%):</span></h2>
    <Input id="range" value="80" onChange={() => {}} type="range" />

    <h2><span>9. Input type checkbox (checked):</span></h2>
    <Input id="checkbox" checked onChange={() => {}} type="checkbox" />

    <h2><span>10. Input type radio (disabled):</span></h2>
    <Input id="radio" disabled type="radio" />

  </div>
);

export default Sandbox;
/* eslint-enable */
