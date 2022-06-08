import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

const Users = () => {
    const[searchParams ,setSearchParams]=useSearchParams()
    const data = searchParams.get('filter')==='active';
    
    return (
        <div>
            <h4>User name</h4>
            
            {/* search params  */}

            <button onClick={()=>setSearchParams({filter:'active'})}>Active Users </button>
            <button onClick={()=>setSearchParams({})}>Reset Users </button>

            {
                data ? <h2>Show all active users </h2> : <h3>Reset all Active users</h3>
            }
           
            <Outlet/>
        </div>
    );
};

export default Users;