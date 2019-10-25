import React from 'react';
import PropTypes from 'prop-types';

import Exercise from '../Exercise';

function List({
    exercises,
    onDeleteExercise,
    onAddSet, 
    onUpdateSet,
    onDeleteSet
}) {
    return (
        <section className="exercise-list">
                {exercises.map((exercise, index) =>
                    <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        onDelete={onDeleteExercise}
                        onAddSet={onAddSet}
                        onUpdateSet={onUpdateSet}
                        onDeleteSet={onDeleteSet}
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