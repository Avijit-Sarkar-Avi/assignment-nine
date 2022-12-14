import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case md:text-3xl">Web Quiz</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 md:text-xl ">
                        <li><Link to='/home'>Home</Link></li>
                        <li>
                            <Link to='/chart'>Chart</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;