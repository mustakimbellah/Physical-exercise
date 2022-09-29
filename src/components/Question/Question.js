import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <div className='question-ans'>
                <h3>Question-1: What Does React Work ?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
            </div>
            <div className='question-ans'>
                <h3>Question-2:Difference between State and Props  ?</h3>
                <div className='table'>
                    <div>
                        <h1>Props</h1>
                        <p>Props are read-only.</p>
                        <p>Props are immutable.</p>
                        <p>Props can be accessed by the child component.</p>
                        <p>Stateless component can have Props.</p>
                    </div>
                    <div>
                        <h1>State</h1>
                        <p>State changes can be asynchronous.</p>
                        <p>State is mutable.</p>
                        <p>State cannot be accessed by child components.</p>
                        <p>Stateless components cannot have State</p>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Question;