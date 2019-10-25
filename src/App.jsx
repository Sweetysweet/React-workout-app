import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

import data from './data/exercises.json';

export default function App() {
    const [exercises, setExercises] = React.useState(data);

    function handleSubmit(title) {
        console.log(exercises);
        console.log(title);
        const exercise = {title, sets: [] };
        //имеющиеся упражнения + новые
        setExercises([...exercises, exercise]);
    }

    function handleAddSet(exerciseId) {
        setExercises(exercises.map(exercise => {
            if (exercise.id !== exerciseId) return exercise;
            //работаем с нужным exercise - которому необходимо добавить set
            return {
                ...exercise, // копируем свойства из объекта exercise
                sets: [
                    // берем сеты котоыре есть и добавим новые
                    ...exercise.sets,
                    {
                        weight: 0,
                        reps: 0
                    }
                ]

            };
        }));
    }
    
    return (
        <main>
            <Header title="React Workout"/>

            <List 
                exercises={exercises} 
                onAddSet={handleAddSet}
            />

           <Form onSubmit={handleSubmit}/>
        </main>
    );
}
