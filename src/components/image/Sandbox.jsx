/* eslint-disable */
import React, { Fragment } from 'react';
import Image from './Image';

const Sandbox = () => (
  <Fragment>

    <h2><span>1. Base image placeholder:</span></h2>
    <Image />

    <h2><span>2. Image with src and alt attribute:</span></h2>
    <Image
      src="https://yt3.ggpht.com/a-/AN66SAxaodVdRdyJ3YuM24rQ07_py_oWfFdEvVBp=s100-mo-c-c0xffffffff-rj-k-no"
      alt="youtube"
    />

    <h2><span>3. Image placeholder with 50x50, 100x100 and 150x150 sizes:</span></h2>
    <Image width={50} height={50} style={{ marginRight: '20px' }} />
    <Image width={100} height={100} style={{ marginRight: '20px' }} />
    <Image width={150} height={150} />

    <h2><span>4. Circle image with 150x150 size:</span></h2>
    <Image
      src="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
      width={150}
      height={150}
      circle
    />

  </Fragment>
);

export default Sandbox;
/* eslint-enable */
