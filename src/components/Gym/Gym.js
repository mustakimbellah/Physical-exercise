import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Gym.css';
import Break from '../Break/Break';
import Myinfo from '../Myinfo/Myinfo';
import Wha from '../Wha/Wha';

const Gym = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, [])
    return (
        <div className='gym-container'>
            <div className='exercise-container'>

                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                    ></Exercise>)
                }
            </div>
            <div className='cart-container'>
                <Myinfo></Myinfo>
                <Wha></Wha>
                <Break></Break>


            </div>
        </div>
    );
};

export default Gym;