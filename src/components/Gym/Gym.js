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
    const [timee, setTime] = useState(0);
    const total = (tim) => {
        let newTime = parseInt(timee) + parseInt(tim);
        setTime(newTime);

    }
    return (
        <div className='gym-container'>
            <div className='exercise-container'>

                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        ti={total}
                    ></Exercise>)
                }
            </div>
            <div className='cart-container'>
                <Myinfo></Myinfo>
                <Wha></Wha>
                <Break time={timee}></Break>


            </div>
        </div>
    );
};

export default Gym;