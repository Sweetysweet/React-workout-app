import React from 'react';
import Button from '../Button';

export default function ExerciseSetList({ 
    set,
    onUpdate,
    onDelete 
}) {
    const [weight, setWeight] = React.useState(set.weight);
    const [reps, setReps] = React.useState(set.reps);
    //true - октрытие сразу в режиме редактирования -false - нет
    const [editing, setEditing] = React.useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        
        onUpdate(set.id, { weight, reps });
        setEditing(false);
    }


    function handleWeightChange({ target: { value }}) {
        setWeight(Number(value)); // == target.value
    }

    function handleRepsChange({ target: { value }}) {
        setReps(Number(value));
    }

    return (
        <li>
            {editing ? 
                <form className="exercise-set-form" onSubmit={handleSubmit}>
                    <input 
                        value={weight}
                        placeholder="Вес" 
                        onChange={handleWeightChange} 
                    />
                    <input 
                        value={reps}
                        placeholder="Количество повторений" 
                        onChange={handleRepsChange}
                    /> 

                    <div className="buttons">
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
                    </div>
                </form>  
                :
                <div className="exercise-set-item">
                    <div>
                        <span>{set.weight || 0} кг.</span> 
                        <span>{set.reps || 0} повторений</span>
                    </div>
                
                    <div className ="buttons">
                        <Button 
                            className="edit icon" 
                            icon="edit" 
                            onClick={() => setEditing(true)} 
                        />
                        <Button 
                            className="delete icon" 
                            icon="delete" 
                            onClick={() => onDelete(set.id)} 
                        />
                    </div>    
                </div> 
            }
        </li>
    )
}