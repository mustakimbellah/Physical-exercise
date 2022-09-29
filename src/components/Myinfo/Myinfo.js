import React from 'react';
import formal from '../../images/formal.jpg'
import loca from '../../images/loca.png'
import Break from '../Break/Break';
import './Myinfo.css';

const Myinfo = () => {
    return (
        <div className='info-container'>
            <div>
                <img className='formal-photo' src={formal} alt="" srcset="" />

            </div>
            <div className='address-container'>
                <div>
                    <h5>Mustakim Bellah</h5>
                </div>
                <div>
                    <p>Khulna,Bangladesh</p>
                </div>
            </div>

        </div >
    );
};

export default Myinfo;