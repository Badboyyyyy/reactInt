import React from 'react';
import{ NavLink } from 'react-router-dom';
const Footer = () =>{
 return(
     <>
     <div className= "footer">
     <NavLink to = "/">About</NavLink>
   <NavLink to = "/">Blog</NavLink>
   <NavLink to = "/">Schools</NavLink>
   <NavLink to = "/">Apps</NavLink>
   <NavLink to = "/">Helps</NavLink>
   <NavLink to = "/">Guidelines</NavLink>
   <NavLink to = "/">Career</NavLink>
   <NavLink to = "/">Terms</NavLink>
   <NavLink to = "/">Privacy</NavLink>
     </div>
     
   </>
 )
}
export default Footer;