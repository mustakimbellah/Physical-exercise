import React from 'react';
import './Wha.css'

const Wha = () => {
    return (
        <div className='wha-container'>
            <div className='wha'>
                <h3>60<small>Kg</small></h3>

                <h5>Weight</h5>
            </div>

            <div>
                <h3>178<small>cm</small></h3>

                <h5>Height</h5>
            </div>

            <div>
                <h3>23<small>yr</small></h3>

                <h5>Age</h5>
            </div>
        </div>
    );
};

export default Wha;