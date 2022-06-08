import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {userId} = useParams();
    // console.log('amarid:',id.userId);
    return (
        <div>
            DynamicRouting : {userId} <br/>
            Name :'Mim',<br/>
            Designation:Designer,<br/>
            Roll :'React developer'
        </div>
    );
};

export default UserDetails;