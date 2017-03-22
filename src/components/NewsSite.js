/* eslint-disable import/default */

import React from 'react';
import { Panel } from 'react-bootstrap';

const NewsSite = (props) => {
    return ( 
        <Panel header={props.name}>
            <div>{props.desc}</div>
        </Panel>
    );
};

export default NewsSite;