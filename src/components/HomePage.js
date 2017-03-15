/* eslint-disable import/default */

import React from 'react';
import {Link} from 'react-router';

import FacebookButton from './FacebookButton';

const HomePage = (props) => {
  return (
    <div>
      <h1>App</h1>

      <h2>App</h2>
      <button onClick={props.onClickGetNews}>Get news sites</button>
      <ol>
        <li>list item</li>
      </ol>
      <FacebookButton fb={window.FB}/>
    </div>
  );
};

export default HomePage;