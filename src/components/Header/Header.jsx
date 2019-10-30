import React from 'react';
//import PropTypes from 'prop-types';

import Stats from '../Stats';
import Timer from '../Timer';

export default function Header({title, exercises}) {
    return (
        <header>
            <Stats exercises={exercises} />
            
            <h1>{title}</h1>
            
            <Timer />
        </header>
    );
}

// Header.propTypes = {
//     todos: PropTypes.array.isRequired
// };
