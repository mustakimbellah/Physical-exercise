import React, { useState } from 'react';
import './Break.css'

const Break = (props) => {
    const [br, setBr] = useState(0);
    if (br)
        localStorage.setItem('set', br);
    // setBr(localStorage.getItem('set'));

    return (
        <div className='break-container'>
            <h5>Add A Break</h5>
            <div className='btn-second'>
                <button onClick={() => setBr(10)} className='btn'>10s</button>
                <button onClick={() => setBr(20)} className='btn'>20s</button>
                <button onClick={() => setBr(30)} className='btn'>30s</button>
                <button onClick={() => setBr(40)} className='btn'>40s</button>

            </div>
            <div>
                <h2>Exercise Details</h2>
                <div className='exercise-time'>
                    <h4>Exercise time : {props.time}</h4>
                </div>
                <div className='exercise-time'>
                    <h4>Break time : {br}</h4>
                </div>
            </div>

            <div className='btn-activity'>
                <button className='activity-btn'>Activity Completed</button>
            </div>
        </div>

    );
};

export default Break;