import Styles from './css/navbar.module.css'

import React from 'react';
import { Link } from 'react-router-dom';
import {useLogout} from "../hooks/useLogout"
import {useAuthContext} from "../hooks/useAuthContext"
const Navbar = () => {
    const {logout}=useLogout()
    const {user}= useAuthContext()
    return (
        <nav className={Styles.navbar}>
            <ul>
                <li className={Styles.title}>
                    myMoney
                </li>
                { !user && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li> <Link to="/signup">Signup</Link></li>
                    </>
                )}
                {user && (
                    <>
                    <li>hello {user.displayName}</li>
                    <li><button className='btn' onClick={logout}>Logout</button></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar; 
