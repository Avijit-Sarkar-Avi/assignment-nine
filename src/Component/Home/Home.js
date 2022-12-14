import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Home = () => {
    const carts = useLoaderData()
    return (
        <div>
            <div className='text-xl md:text-4xl px-5 flex'>
                <img className='h-20 md:h-60' src="https://static.vecteezy.com/system/resources/previews/005/083/209/non_2x/editable-flat-outline-design-of-quiz-icon-vector.jpg" alt="" />
                <h1>Choose any Tropic and Start Your Quiz</h1>
            </div>
            <div className='grid gap-5 p-12 md:grid-cols-2 lg:grid-cols-4'>
                {
                    carts.data.map(cart =>
                        <Cart
                            key={cart.id}
                            cart={cart}
                        ></Cart>)
                }
            </div>

        </div>
    );
};

export default Home;