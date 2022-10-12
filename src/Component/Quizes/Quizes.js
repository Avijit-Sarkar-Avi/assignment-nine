import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from '../Option/Option';
const Quizes = ({ yourQuiz }) => {
    const { question, options, correctAnswer, id } = yourQuiz;

    const notify = () => {
        toast(`${correctAnswer}`,
            {
                autoClose: 500,
                pauseOnHover: false
            }
        )
    }

    return (
        <div className='border-2 border-red-500 p-10 mb-5'>


            <form>
                <div className='flex justify-between'>
                    <h3 className='text-2xl'>Quiz: {question}</h3>
                    <EyeIcon onClick={notify} className="w-6 h-6 text-blue-500" />

                </div>
                <ToastContainer />
                <div>
                    {
                        options.map(option =>
                            <Option
                                option={option}
                                correctAnswer={correctAnswer}
                            ></Option>
                        )
                    }
                </div>
            </form>

        </div>
    );
};

export default Quizes;