import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    const { id, name, logo, total } = cart
    return (
        <div>
            <div className="card card-compact w-9/12 shadow-xl bg-blue-400">
                <figure><img className='w-7/12' src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Total Quiz: {total}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/cart/${id}`}>Start Quiz</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;