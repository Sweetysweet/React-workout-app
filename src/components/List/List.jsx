import React from 'react';
//import PropTypes from 'prop-types';

import Exercise from '../Exercise';

function List({
    exercises,
    selectedExercise,

    onSelectExercise,
    onUpdateExercise,
    onDeleteExercise,
    onAddSet, 
    onUpdateSet,
    onDeleteSet
}) {
    return (
        <section className="exercise-list">
                {exercises.map(exercise =>
                    <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        selected={exercise.id === selectedExercise.id}
                        onSelect={onSelectExercise}
                        onUpdate={onUpdateExercise}
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