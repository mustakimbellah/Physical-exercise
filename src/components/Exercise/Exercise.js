import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const { name, photo, time } = props.exercise;
    return (
        <div className='exercise-container'>
            <img src={photo} alt="" srcset="" />
            <div className='exercise-info'>
                <p className='exercise-name'>{name}</p>
                <p>Time:{time}</p>
            </div>
        </div>
    );
};

export default Exercise;