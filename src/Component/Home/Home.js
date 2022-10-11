import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const carts = useLoaderData()
    return (
        <div>
            <div className='text-xl md:text-4xl px-5 flex'>
                <img className='h-20 md:h-60' src="https://static.vecteezy.com/system/resources/previews/005/083/209/non_2x/editable-flat-outline-design-of-quiz-icon-vector.jpg" alt="" />
                <h1>Choose any Tropic and Start Your Quiz</h1>
            </div>
            <div>
                <h1>My data is {carts.length}</h1>
            </div>

        </div>
    );
};

export default Home;