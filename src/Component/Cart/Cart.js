import React from 'react';

const Cart = ({ cart }) => {
    const { name, logo, total } = cart
    return (
        <div>
            <div className="card card-compact w-9/12 shadow-xl bg-blue-400">
                <figure><img className='w-7/12' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Total Quiz: {total}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Start Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;