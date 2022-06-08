import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <h1>This is the Ehsan marketing products pages </h1>
            <input type="text" placeholder="search products" />

            <nav style={{padding:'10px',display:'flex'}}>
                <Link to="feature" style={{textDecoration:'none',padding:'7px'}}>Featured</Link>
                <Link to="new" style={{textDecoration:'none',padding:'7px'}}>New</Link>
            </nav>

            <Outlet />

        </div>
    );
};

export default Products;