import React from 'react';
import { Outlet } from 'react-router-dom';

const Users = () => {
    return (
        <div>
            <h4>User profile 1</h4>
            <h4>User profile 2</h4>
            <h4>User profile 3</h4>
            <h4>User profile 4</h4>
            <Outlet/>
        </div>
    );
};

export default Users;