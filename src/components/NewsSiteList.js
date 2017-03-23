/* eslint-disable import/default */

import React from 'react';
import NewsSite from './NewsSite';
import { Accordion } from 'react-bootstrap';

const NewsSiteList = (props) => {
    const sitesList = props.news.map((item, index) => <NewsSite key={item.name} index={index} {...item} onClickEdit={props.onClickEdit} onClickSave={props.onClickSave}/>)
    return ( 
        <Accordion>
            {sitesList}
        </Accordion>
    );
};

export default NewsSiteList;