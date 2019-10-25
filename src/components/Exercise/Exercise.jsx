import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ExerciseSetItem from '../ExerciseSetItem';

export default function Exercise({ 
    exercise,
    completed,
    onEdit,
    onDelete,
    onAddSet,
    onUpdateSet,
    onDeleteSet
}) {
    const inputRef = React.useRef();
    const [editing, setEditing] = React.useState(false);
    const className = `exercise${completed ? ' completed' : ''}`;

    React.useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    function handleSubmit(event) {
        event.preventDefault();
        
        onEdit(exercise.id, inputRef.current.value);
        
        setEditing(false);
    }

    function handleAddSet() {
        onAddSet(exercise.id);
    }

    function handleDelete() {
       onDelete(exercise.id);
    }

    function handleEdit() {
        setEditing(true);
    }

    function handleUpdateSet(setId, data) {
        onUpdateSet(exercise.id, setId, data);
    }

    function handleDeleteSet(setId) {
        onDeleteSet(exercise.id, setId);
    }
    console.log(exercise.sets)

    if (editing) {
        return (
            <form className="exercise-edit-form" onSubmit={handleSubmit}>
                <input type="text" ref="title" defaultValue={exercise.title} />
                <Button className="save icon" icon="save" type="submit" />
            </form>
        );
    } else {
        return (
            <div 
                ref={inputRef}
                className={className}
            >
                <div className="exercise-details">
                    <span className="exercise-title">{exercise.title}</span>
    
                    <Button className="add icon" icon="add" onClick={handleAddSet} />
                    <Button className="edit icon" icon="edit" onClick={handleEdit} />
                    <Button className="delete icon" icon="delete" onClick={handleDelete} />
                </div>

                <ul className="exercise-set-list">
                    {exercise.sets.map(set => 
                        <ExerciseSetItem
                            key = {set.id}
                            set = {set}
                            onUpdate = {handleUpdateSet}
                            onDelete = {handleDeleteSet}
                        />      
                    )}
                </ul>
            </div>
        );
    }   
}

// Exercise.propTypes = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired,
//     onDelete: PropTypes.func.isRequired,
//     onToggle: PropTypes.func.isRequired,
//     onEdit: PropTypes.func.isRequired
// };