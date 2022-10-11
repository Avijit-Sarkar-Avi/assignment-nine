import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizs = useLoaderData();
    console.log(quizs.data)
    return (
        <div>
            <h1 className='text-2xl text-center'>Tropic: {quizs.data.name}</h1>
            <div className='border-2 border-red-500'>
                <h3>{quizs.data.questions[0].question}</h3>
            </div>
        </div>
    );
};

export default Quiz;