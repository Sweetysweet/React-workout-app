import React from 'react';
import Button from '../Button';

export default function ExerciseSetList({ set, onUpdate, onDelete }) {
    const [weight, setWeight] = React.useState(set.weight);
    const [reps, setReps] = React.useState(set.reps);
    const [editing, setEditing] = React.useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        
        onUpdate(set.id, { weight, reps });
        setEditing(false);
    }

    return (
        <li>
            {editing ? 
                <form className="exercise-set-edit-form" onSubmit={handleSubmit}>
                    <input 
                        value={weight} 
                        onChange={({ target: { value } }) => setWeight(value)} 
                    /> кг. 

                    <input 
                        value={reps} 
                        onChange={({ target: { value } }) => setReps(value)}
                     /> повторы

                    <Button 
                        type="submit" 
                        className="save icon" 
                        icon="save"    
                    />
                    <Button 
                        type="button"
                        className="cancel icon" 
                        icon="cancel" 
                        onClick={() => setEditing(false)} 
                    />
                </form>  
                :
                <div>
                    {set.weight} кг. {set.reps} повторы
                    <Button className="edit icon" icon="edit" onClick={() => setEditing(true)} />
                    <Button className="delete icon" icon="delete" onClick={() => onDelete(set.id)} />
                </div> 
            }
        </li>
    )
}