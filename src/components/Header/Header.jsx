import React from 'react';
import PropTypes from 'prop-types';

import Stats from '../Stats';
import Stopwatch from '../Stopwatch';

export default function Header({title, exercises}) {
    return (
        <header>
            <Stats exercises={exercises} />
            
            <h1>{title}</h1>
            
            <Stopwatch />
        </header>
    );
}

// Header.propTypes = {
//     todos: PropTypes.array.isRequired
// };
