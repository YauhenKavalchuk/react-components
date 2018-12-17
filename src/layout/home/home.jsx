import React, { Fragment } from 'react';
import { SOCIAL_CONFIG, DEPENDENCIES } from './constants';
import './home.css';


const Home = () => (
  <Fragment>
    <h1 className="title"><span>It is the expandable collection of simple React components.</span></h1>
    <h3><span>Dependencies:</span></h3>
    <ul className="dependencies">
      {DEPENDENCIES.map(({ id, name, link }) => (
        <li className="dependencyItem" key={id}>
          <a className="dependencyLink" href={link} rel="noopener noreferrer" target="_blank">{name}</a>
        </li>
      ))}
    </ul>
    <h3><span>Author in social networks:</span></h3>
    <ul className="socialList">
      {SOCIAL_CONFIG.map(({
        id, socialLink, imageLink, imgHeight,
      }) => (
        <li key={id} className="socialItem">
          <a className="socialLink" href={socialLink} rel="noopener noreferrer" target="_blank">
            <img src={imageLink} height={imgHeight} alt={id} />
          </a>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default Home;
