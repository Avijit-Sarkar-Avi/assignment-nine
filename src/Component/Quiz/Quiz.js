import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const Quiz = () => {
    const quizs = useLoaderData();
    // console.log(quizs.data.questions)

    return (
        <div>
            <h1 className='text-2xl text-center'>Tropic: {quizs.data.name}</h1>
            <div className='p-10'>
                <div>

                    {
                        quizs.data.questions.map(yourQuiz =>
                            <Quizes
                                key={yourQuiz.id}
                                yourQuiz={yourQuiz}
                            ></Quizes>)
                    }


                </div>
            </div>
        </div>
    );
};

export default Quiz;