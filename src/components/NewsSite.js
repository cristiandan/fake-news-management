/* eslint-disable import/default */

import React from 'react';
import { Panel } from 'react-bootstrap';
import NewsSiteEditable from './NewsSiteEditable';
import NewsSiteDisplay from './NewsSiteDisplay';

const NewsSite = (props) => {
    return ( 
        <Panel header={props.name}>
            { props.editing ? 
                <NewsSiteEditable {...props}/>
                :
                <NewsSiteDisplay {...props}/>
            }
        </Panel>
    );
};

export default NewsSite;