/* eslint-disable */
import React, { Fragment } from 'react';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';

import Image from '../image/Image';
import ButtonGroup from '../button-group/ButtonGroup';
import Button from '../button/Button';

const Sandbox = () => (
  <Fragment>

    {/*
      Example of Usage Syntax
      <TabBar>
        <TabBarItem label='tab1'>Content</TabBarItem>
        <TabBarItem label='tab2'>Content</TabBarItem>
        <TabBarItem label='tab3'>Content</TabBarItem>
      </TabBar>
    */}

    <h2><span>1. Horizontal Tabbar:</span></h2>
    <TabBar>
      <TabBarItem label="Simple text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </TabBarItem>
      <TabBarItem label="Image">
        <Image
          src="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
          width={150}
          height={150}
        />
      </TabBarItem>
      <TabBarItem label="Component">
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>
      </TabBarItem>
      <TabBarItem label="Just empty tab" />
    </TabBar>

    <h2><span>2. Vertical Tabbar:</span></h2>
    <TabBar vertical>
      <TabBarItem label="Simple text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </TabBarItem>
      <TabBarItem label="Image">
        <Image
          src="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
          width={150}
          height={150}
        />
      </TabBarItem>
      <TabBarItem label="Component">
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>
      </TabBarItem>
    </TabBar>

  </Fragment>
);

export default Sandbox;
/* eslint-enable */
