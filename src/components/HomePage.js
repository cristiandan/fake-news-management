/* eslint-disable import/default */

import React from 'react';
import {Link} from 'react-router';

import FacebookButton from './FacebookButton';

const HomePage = () => {
  return (
    <div>
      <h1>App</h1>

      <h2>App</h2>
      <ol>
        <li>list item</li>
      </ol>
      <FacebookButton fb={window.FB}/>
    </div>
  );
};

export default HomePage;