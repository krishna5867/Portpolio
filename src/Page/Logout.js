import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear("login");
        navigate('/login');
    }

    return (
        <div>
            <button className='btn btn-warning mt-4 mx-4' onClick={handleLogout}>Logout</button>

        </div>
    )
}

export default Logout