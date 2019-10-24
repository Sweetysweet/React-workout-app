import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

export default function Exercise({ 
    exercise,
    completed,
    onEdit,
    onDelete,
    onToggle
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

    function handleDelete() {
        onDelete(exercise.id);
    }

    function handleToggle() {
        onToggle(exercise.id);
    }

    function handleEdit() {
        setEditing(true);
    }

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
                {/* {<span className="exercise-title">{exercise.title}</span>} */}
    
                <Button className="edit icon" icon="edit" onClick={handleEdit} />
                <Button className="delete icon" icon="delete" onClick={handleDelete} />
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