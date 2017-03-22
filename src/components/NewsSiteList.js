/* eslint-disable import/default */

import React from 'react';
import NewsSite from './NewsSite';
import { Accordion } from 'react-bootstrap';

const NewsSiteList = (props) => {
    const sitesList = props.news.map((item) => <NewsSite key={item.name} name={item.name} type={item.type} desc={item.desc}/>)
    return ( 
        <Accordion>
            {sitesList}
        </Accordion>
    );
};

export default NewsSiteList;