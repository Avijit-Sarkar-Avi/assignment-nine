import React from 'react';

const Quizes = ({ yourQuiz }) => {
    const { question, options, correctAnswer, id } = yourQuiz;
    return (
        <div>
            <h3 className='text-2xl'>{question}</h3>
            <p>{options[0]}</p>
            <p>{options[1]}</p>
            <p>{options[2]}</p>
            <p>{options[3]}</p>
        </div>
    );
};

export default Quizes;