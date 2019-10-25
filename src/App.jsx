import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

import data from './data/exercises.json';
import Exercise from './components/Exercise';

export default function App() {
    const [exercises, setExercises] = React.useState(data);

    function handleSubmit(title) {
        console.log(exercises);
        console.log(title);
        const exercise = {
            id: Date.now(), 
            title, 
            sets: [] 
        };
        //имеющиеся упражнения + новые
        setExercises([...exercises, exercise]);
    }

    //удаление упражнения

    function handleDeleteExercise(exerciseId) {
        setExercises(exercises.filter(exercise => exercise.id !== exerciseId));
    }

    //добавление сета
    function handleAddSet(exerciseId) {
        setExercises(exercises.map(exercise => {
            if (exercise.id !== exerciseId) return exercise;
            //работаем с нужным exercise - которому необходимо добавить set

            const set = {
                id: Date.now(),
                weight: 0,
                reps: 0
            };

            return {
                ...exercise, // копируем свойства из объекта exercise
                sets: [
                    // берем сеты котоыре есть и добавим новые
                    ...exercise.sets,
                    set
                ]

            };
        }));
    }


    //добавление упражнения
    function handleUpdateSet(exerciseId, setId, data) {
        setExercises(exercises.map(exercise => {
            if (exercise.id !== exerciseId) return exercise;
            //работаем с нужным exercise - которому необходимо добавить set
            return {
                ...exercise, // копируем свойства из объекта exercise
                sets: exercise.sets.map(set => {
                    if (set.id !== setId) return set;

                    return {
                        ...set,
                        ...data
                    }
                })
            };
        }));
    }
    //удаление сета
    function handleDeleteSet(exerciseId, setId) {
        setExercises(exercises.map(exercise => {
            if (exercise.id !== exerciseId) return exercise;
            //работаем с нужным exercise - которому необходимо добавить set
            return {
                ...exercise, // копируем свойства из объекта exercise
                sets: exercise.sets.filter(set => set.id !== setId)
            };
        }));
    }

    return (
        <main>
            <Header title="React Workout"/>

            <List 
                exercises={exercises} 
                onAddSet={handleAddSet}
                onDeleteExercise={handleDeleteExercise}
                onUpdateSet={handleUpdateSet}
                onDeleteSet={handleDeleteSet}
            />

           <Form onSubmit={handleSubmit}/>
        </main>
    );
}
