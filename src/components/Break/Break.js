import React, { useEffect, useState } from 'react';
import './Break.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Break = (props) => {
    const [br, setBr] = useState(0);

    if (br)

        (localStorage.setItem('set', br));
    useEffect(() => {
        setBr(localStorage.getItem('set'));


    }, []);

    const notify = () => toast("Congratulations!!! Today Exercise");

    return (
        <>
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
                        <h4>Exercise time : {props.time} s</h4>
                    </div>
                    <div className='exercise-time'>
                        <h4>Break time : {br} s</h4>
                    </div>
                </div>

                <div className='btn-activity'>
                    <button onClick={notify} className='activity-btn'>Activity Completed</button>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </>
    );
};

export default Break;