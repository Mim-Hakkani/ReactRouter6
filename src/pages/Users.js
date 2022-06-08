import React from 'react';
import { Outlet } from 'react-router-dom';

const Users = () => {
    return (
        <div>
            <h4>User profil</h4>
           
            <Outlet/>
        </div>
    );
};

export default Users;