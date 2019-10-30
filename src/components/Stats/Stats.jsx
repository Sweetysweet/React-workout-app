import React from 'react';
//import PropTypes from 'prop-types';

export default function Stats( { exercises } ) {
    const weight = exercises.reduce((total, exercise) => 
        total + exercise.sets.reduce((total, set) => total + set.weight, 0),
    0);

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <th>Упражнений:</th>
                    <td>{exercises.length}</td>
                </tr>
                <tr>
                    <th>Общий вес, кг:</th>
                    <td>{weight}</td>
                </tr>
                {/* <tr>
                    <th>Осталось:</th>
                    <td>{uncompleted}</td>
                </tr> */}
            </tbody>
        </table>
    );
}

// Stats.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         completed: PropTypes.bool.isRequired
//     })).isRequired
// };