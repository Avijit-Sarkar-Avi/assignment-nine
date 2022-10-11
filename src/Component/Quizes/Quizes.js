import React from 'react';

const Quizes = ({ yourQuiz }) => {
    const { question, options, correctAnswer, id } = yourQuiz;
    return (
        <div className='border-2 border-red-500 p-10 mb-5'>


            <form>
                <h3 className='text-2xl'>Quiz: {question}</h3>
                <div>
                    <input id="zero" type="radio" name="quiz" />
                    <label for="zero"> {options[0]}</label>
                </div>
                <div>
                    <input id='one' type="radio" name="quiz" />
                    <label for="one"> {options[1]}</label>
                </div>
                <div>
                    <input id='two' type="radio" name="quiz" />
                    <label for='two'> {options[2]}</label>
                </div>
                <div>
                    <input id='three' type="radio" name="quiz" />
                    <label for='three'> {options[3]}</label>
                </div>


            </form>

        </div>
    );
};

export default Quizes;