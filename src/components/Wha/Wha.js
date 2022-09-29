import React from 'react';
import './Wha.css'

const Wha = () => {
    return (
        <div className='wha-container'>
            <div className='wha'>
                <h3>60</h3>
                <small>Kg</small>
                <p>Weight</p>
            </div>

            <div>
                <h3>178</h3>
                <small>cm</small>
                <p>Height</p>
            </div>

            <div>
                <h3>23</h3>
                <small>yr</small>
                <p>Age</p>
            </div>
        </div>
    );
};

export default Wha;