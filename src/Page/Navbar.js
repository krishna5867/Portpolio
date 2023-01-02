import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
        const isLogin = localStorage.getItem('login');

        const isLogged =()=> {
        let login = localStorage.getItem('login')
                if(!login){
                    alert("Login First")
            }
        };
        useEffect(()=>{
            isLogged();
        },[isLogin])


    return (
        <>
            <div className='d-flex justify-content-around mt-2'>
                <div>
                    <Link to="/" onClick={isLogged}>Home</Link>
                </div>
                <div>
                    <Link to="/about" onClick={isLogged}>About</Link>
                </div>
                <div>
                    <Link to="/modalbox" onClick={isLogged}>Modal</Link>
                </div>
                {isLogin ? 
                (<div>
                    <Link to="/logout">Logout</Link>
                </div>):
                (<div>
                <Link to="/login" onClick={isLogged}>Login</Link>
                </div>)}
            </div>

        </>
    )
}

export default Navbar;
