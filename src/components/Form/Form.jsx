import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

export default function Form({ onAdd }) {
    const [title, setTitle] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (title) {
            onAdd(title);
            setTitle('');
        }
    }

    function handleChange(event) {
        setTitle(event.target.value);
    }
        
    return (
        <form className="exercise-add-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                placeholder="Что нужно сделать?"
                onChange={handleChange} />
                
            <Button type="submit" disabled={!title}>Добавить</Button>
        </form>
    );
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};