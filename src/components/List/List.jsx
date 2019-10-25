import React from 'react';
import PropTypes from 'prop-types';

import Exercise from '../Exercise';

function List({exercises, onAddSet, ...props}) {
    return (
        <section className="exercise-list">
                {exercises.map((exercise, index) =>
                    <Exercise
                        key={exercise}
                        exercise={exercise}
                        onAddSet={onAddSet}
                    />)
                }
        </section>
    );
}

// List.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         completed: PropTypes.bool.isRequired
//     })).isRequired,
//     onDelete: PropTypes.func.isRequired,
//     onToggle: PropTypes.func.isRequired,
//     onEdit: PropTypes.func.isRequired
// };

export default List;