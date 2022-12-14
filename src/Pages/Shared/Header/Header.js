import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../Loading/Loading';

const Header = () => {

    const navigate = useNavigate();



    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.displayName);

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/addproduct'>Add Product</Link></li>
        <li><Link to='/myproduct'>My Product</Link></li>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(err => console.error(err))
    }



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">MoboSell</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? <button onClick={handleLogout} className="btn btn-primary">Logout</button> :
                        <>
                            <Link to='/login' className="btn btn-primary">Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;