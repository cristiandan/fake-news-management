/* eslint-disable import/default */

import React from 'react';
import {Link} from 'react-router';

import UserGreeting from './UserGreeting';


const HomePage = (props) => {

  return (
    <div>
      <h1>App</h1>

      <h2>Home</h2>

      <UserGreeting userData={props.user}/>
 
    </div>
  );
};

export default HomePage;