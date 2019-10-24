import React from 'react';
import PropTypes from 'prop-types';

import Stats from '../Stats';
import Stopwatch from '../Stopwatch';

export default function Header({title}) {
    return (
        <header>
            <Stats todos={[]} />
            
            <h1>{title}</h1>
            
            <Stopwatch />
        </header>
    );
}

Header.propTypes = {
    todos: PropTypes.array.isRequired
};
