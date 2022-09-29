//import React, { useState } from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const { name, photo, time } = props.exercise;

    //console.log(timee);
    return (
        <div className='exercise-container-r'>
            <img src={photo} alt="" />
            <div className='exercise-info'>
                <p className='exercise-name'>{name}</p>
                <p className='exercise-name2'>Time required: {time}s</p>
            </div>
            <div className='btn'>
                <button onClick={() => props.ti(time)} className='exercise-btn'>Add to list</button>
            </div>


        </div>
    );
};

export default Exercise;