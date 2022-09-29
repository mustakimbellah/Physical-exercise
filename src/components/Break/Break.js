import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div className='break-container'>
            <h5>Add A Break</h5>
            <div className='btn-second'>
                <button className='btn'>10s</button>
                <button className='btn'>20s</button>
                <button className='btn'>30s</button>
                <button className='btn'>40s</button>
                <button className='btn'>50s</button>
            </div>
            <div>
                <h2>Exercise Details</h2>
                <div className='exercise-time'>
                    <h4>Exercise time : { }</h4>
                </div>
                <div className='exercise-time'>
                    <h4>Break time : { }</h4>
                </div>
            </div>

            <div className='btn-activity'>
                <button className='activity-btn'>Activity Completed</button>
            </div>
        </div>

    );
};

export default Break;