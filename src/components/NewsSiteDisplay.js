/* eslint-disable import/default */

import React from 'react';
import { Button } from 'react-bootstrap';

const NewsSiteDisplay = (props) => {
    return ( 
            <div>{props.desc}
                <br/>
                <Button onClick={() => props.onClickEdit(props.index)} bsStyle="danger">Edit</Button>
            </div>
    );
};

export default NewsSiteDisplay;