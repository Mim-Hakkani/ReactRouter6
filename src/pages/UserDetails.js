import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const id = useParams();
    console.log('amarid:',id.userId);
    return (
        <div>
            {/* DynamicRouting : {userId} */}
            Name :'Mim',
            Designation:Designer,
            Roll :'React developer'
        </div>
    );
};

export default UserDetails;