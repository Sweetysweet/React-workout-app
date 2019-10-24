import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

import data from './data/exercises.json';

export default function App() {
    const [exercises, setExercises] = React.useState(data)
    return (
        <main>
            <Header title="React Workout"/>
            <List exercises={exercises} />
            <Form />
        </main>
    );
}
