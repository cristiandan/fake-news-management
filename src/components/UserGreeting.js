/* eslint-disable import/default */

import React from 'react';
import {Link} from 'react-router';

const UserGreeting = (props) => {
    console.log('rpo',props)
    return ( 
        props.userData.status === "connected" ?
            <div>
                <p>Salut, {props.userData.user.name}!</p>
                <Link to="/app">Intra in aplicatie</Link>
           </div>
           :
           <div>
               <p>Salut, nu esti autentificat!</p>
               <Link to="/login">Log in</Link>
           </div>
    );
};

export default UserGreeting;