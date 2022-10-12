import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({ option, correctAnswer }) => {

    const marks = () => {
        if (`${correctAnswer}` === `${option}`) {
            toast('Correct Answer', {
                autoClose: 500,
                pauseOnHover: false
            })
        }
        else {
            toast('Wrong Answer', {
                autoClose: 500,
                pauseOnHover: false
            })
        }
    }

    return (
        <div>
            <div>
                <input id="zero" type="radio" name="quiz" onClick={marks} />
                <label for="zero" > {option}</label>
            </div>
        </div>
    );
};

export default Option;