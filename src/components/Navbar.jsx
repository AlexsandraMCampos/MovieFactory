import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSolidCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import "./Navbar.css";


const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/"><BiSolidCameraMovie/>Movies Factory</Link>
            </h2>
            <form action=''>
                <input type='text' placeholder='Busque um filme' />
                <button type='submit'>
                <BiSearchAlt2/>
                </button>
            </form>
        </nav>
    );
}

export default Navbar;