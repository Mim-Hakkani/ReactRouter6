import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

const Logout = () => {
    const auth =useAuth();
    console.log(auth);
    const navigate = useNavigate()

    const handlelogout =()=>{
        auth.logout();
        navigate('/')
    }
    return (
        <div>
            <button onClick={handlelogout}>Logout</button>
        </div>
    );
    }
export default Logout;