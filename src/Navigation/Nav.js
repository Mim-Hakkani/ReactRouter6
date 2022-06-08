import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul style={{listStyle:'none',display:'flex',backgroundColor:'pink',padding:'10px',width:'400px'}}>
                <li><Link to="/home" style={{textDecoration:'none',padding:'7px'}}>Home</Link></li>
                <li><Link to="/about" style={{textDecoration:'none',padding:'7px'}}>About</Link></li>
                <li><Link to="/contact" style={{textDecoration:'none',padding:'7px'}}>Contact</Link></li>
                <li><Link to="/gallary" style={{textDecoration:'none',padding:'7px'}}>Gallary</Link></li>
                 <li><Link to="/products" style={{textDecoration:'none',padding:'7px'}}>Products</Link></li>
            </ul>
        </div>
    );
};

export default Nav;