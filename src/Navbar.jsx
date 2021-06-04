import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import MoreRoundedIcon from '@material-ui/icons/MoreRounded';
const Navbar = () =>{
   return (
    <>
    <nav className= "nav_link">
   
    <NavLink exact activeClassName= "active_class" to = "/"> < AcUnitRoundedIcon /> Learn</NavLink>
    <NavLink exact activeClassName= "active_class" to = "/stroies"> < MenuBookRoundedIcon /> Stories </NavLink>
    <NavLink exact activeClassName= "active_class"  to = "/more">  < MoreHorizRoundedIcon />  More</NavLink>
    <NavLink exact activeClassName= "active_class"  to = "/shop"> <LocalMallRoundedIcon /> Shop</NavLink>
    <NavLink exact activeClassName= "active_class" to = "/logo"> < MoreRoundedIcon/> Logo</NavLink>
    <NavLink exact activeClassName= "active_class"  to = "/more">  < MoreHorizRoundedIcon />  </NavLink>
    <NavLink exact activeClassName= "active_class"  to = "/shop"> <LocalMallRoundedIcon /> </NavLink>
    <NavLink exact activeClassName= "active_class" to = "/logo"> < MoreRoundedIcon/> </NavLink>
    </nav>
    </>
   )
}
export default Navbar;