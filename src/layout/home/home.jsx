import React, { Fragment } from 'react';
import { SOCIAL_CONFIG, DEPENDENCIES } from './constants';
import './home.css';


const Home = () => (
  <Fragment>
    <h1 className="title"><span>Расширяемая коллекция Реакт компонентов.</span></h1>
    <p>В данном видео-курсе мы с вами создадим библиотеку компонентов для проектов на <strong>ReactJS</strong>.</p>
    <p>Целью данного курса лекций является не создать абсалютно универсальные компоненты, а научиться мыслить в компонентном стиле и постараться создавать гибкие и переиспользуемые модули.</p>
    <p>Мы с вами рассмотрим создание как простых компонентов таких как кнопки, бейджики, иконки и т.д. так и объединение их в более сложные компоненты: табы, чипы, модальные окна.</p>
    <p>Все компоненты написаны с проверкой esLint.</p>
    <p>Любой компонент вы можете скачать и свободно переписать под свои задачи, либо расширить его функциональность</p>
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
