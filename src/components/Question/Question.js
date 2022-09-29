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

            <div className='question-ans'>
                <h3>Question-3: What is the process of data load without useEffectApi ?</h3>
                <p>useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you’ll eventually learn everything makes a lot of sense.

                    The goal of this comprehensive article is to gather information about the underlying concepts of useEffect and, in addition, to provide learnings from my own experience with the useEffect Hook.</p>
            </div>
        </div>


    );
};

export default Question;