/* eslint-disable import/default */

import React from 'react';
import {Link} from 'react-router';

import FacebookButton from './FacebookButton';

const HomePage = (props) => {
  let newsItems;
  if(props.news && props.news.newsData.length > 0) {
    newsItems = props.news.newsData.map(site => <li key={site.name}> {site.name} </li>)
  }
  else {
    newsItems = "";
  }

  return (
    <div>
      <h1>App</h1>

      <h2>App</h2>
      <button onClick={props.onClickGetNews}>Get news sites</button>
      <ol>
        {newsItems}
      </ol>
      <FacebookButton fb={window.FB}/>
    </div>
  );
};

export default HomePage;