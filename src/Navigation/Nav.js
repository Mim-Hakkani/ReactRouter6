import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/Auth';

const Nav = () => {
    const auth =useAuth();

    const navigate = useNavigate()
    const handlelogout =()=>{
        auth.logout();
        navigate('/')
    }
    return (
        <div>
            <ul style={{listStyle:'none',display:'flex',backgroundColor:'pink',padding:'10px',width:'400px'}}>
                <li><Link to="home" style={{textDecoration:'none',padding:'7px'}}>Home</Link></li>
                <li><Link to="about" style={{textDecoration:'none',padding:'7px'}}>About</Link></li>
                <li><Link to="contact" style={{textDecoration:'none',padding:'7px'}}>Contact</Link></li>
                <li><Link to="gallary" style={{textDecoration:'none',padding:'7px'}}>Gallary</Link></li>
                 <li><Link to="products" style={{textDecoration:'none',padding:'7px'}}>Products</Link></li>
                 <li><Link to="users" style={{textDecoration:'none',padding:'7px'}}>Users</Link></li>
                 <li><Link to="profile" style={{textDecoration:'none',padding:'7px'}}>Profile</Link></li>
                 
                 {/* <li><Link to="logout" style={{textDecoration:'none',padding:'7px'}}>Logout</Link></li> */}
                  {
                   auth?.user? <li><Link to="logout" style={{textDecoration:'none',padding:'7px'}} onClick={handlelogout}>Logout</Link></li> : <li><Link to="login" style={{textDecoration:'none',padding:'7px'}}>Login</Link></li>
                 }

            </ul>
        </div>
    );
};

export default Nav;