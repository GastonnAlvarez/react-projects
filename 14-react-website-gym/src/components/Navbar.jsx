import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import { links } from '../data';
import './navbar.css';

import {FaBars} from 'react-icons/fa';
import {IoMdClose} from 'react-icons/io';

const Navbar = () => {
    const [isNavShowing,setisNavShowing] = useState(false);


    return (
        <nav>
            <div className="container nav__container">
                <Link to='/' className='logo' onClick={()=> setisNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo" />
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {
                        links.map(({name,path}, index)=>{
                            return(
                                <li key={index}>
                                    <NavLink to={path} className={({isActive})=> isActive ? 'active-nav': ''}>{name}</NavLink>
                                </li>
                            );
                        })
                    }
                </ul>
                <button className="nav__toggle-btn" onClick={()=> setisNavShowing(!isNavShowing)}>
                    {
                        isNavShowing ? <IoMdClose/> : <FaBars/>
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar