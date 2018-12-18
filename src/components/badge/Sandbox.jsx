/* eslint-disable */
import React, { Fragment } from 'react';
import Badge from './Badge';
import Button from '../button/Button';
import Icon from '../icon/Icon';

const Sandbox = () => (
  <Fragment>

    <h2><span>1. Badges with text:</span></h2>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="envelope" />
      <Badge value="new" />
    </Button>
    <Button>
      <Icon name="envelope" />
      <Badge circle value="new" />
    </Button>

    <h2><span>2. Badges with number:</span></h2>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="comment" />
      <Badge value={2} />
    </Button>
    <Button>
      <Icon name="comment-dots" />
      <Badge circle value={12} />
    </Button>

    <h2><span>3. Inline Badges:</span></h2>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="phone" />
      <Badge inline value={1} />
    </Button>
    <Button>
      <Icon name="phone" />
      <Badge inline value="1 missed" />
    </Button>

    <h2><span>4. Outer Badges:</span></h2>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="bell" />
      <Badge outer value={1} />
    </Button>
    <Button>
      <Icon name="wifi" />
      <Badge outer warning value={1} />
    </Button>

    <h2><span>5. Warning, Alert, Success, Info Badges:</span></h2>
    <Button style={{ marginRight: '20px', marginBottom: '20px' }}>
      <Icon name="bullhorn" />
      <Badge circle warning value={1} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="inbox" />
      <Badge circle alert value={1} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="paper-plane" />
      <Badge circle success value={1} />
    </Button>
    <Button>
      <Icon name="rss" />
      <Badge circle info value={1} />
    </Button>
    <br />
    <Button style={{ marginRight: '20px' }}>
      <Icon name="bullhorn" />
      <Badge warning value={1} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="inbox" />
      <Badge alert value={1} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="paper-plane" />
      <Badge success value={1} />
    </Button>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="rss" />
      <Badge info value={1} />
    </Button>

  </Fragment>
);

export default Sandbox;
/* eslint-enable */
