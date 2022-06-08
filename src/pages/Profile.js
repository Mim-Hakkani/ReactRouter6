import React from 'react';
import { useAuth } from './Auth';
// import Login from './Login';
import Logout from './Logout';

const Profile = () => {
    const auth = useAuth()
    return (
        <div>
            <h1>WellCome to the Ehsan Marketing {auth.user}</h1>
            <Logout/>
            {/* <Login /> */}
        </div>
    );
};

export default Profile;