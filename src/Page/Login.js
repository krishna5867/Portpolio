import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('login', true);
        navigate('/')

    }

    useEffect(() => {
        let login = localStorage.getItem('login')
        if (login) {
            navigate('/')
        }
    });


    return (
        <div>
            <button className='btn btn-warning mt-4 mx-4' onClick={handleLogin}>Login</button>

        </div>
    )
}

export default Login
