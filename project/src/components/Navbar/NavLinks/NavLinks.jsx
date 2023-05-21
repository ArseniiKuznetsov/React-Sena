import React, {useState} from 'react';
import classes from "./NavLinks.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const NavLinks = () => {

    const links  = useSelector((state)=>state.navLinks.link);

    return (
        <div className={classes.ListNavbarLinks}>
            {links.map((link) => (
                <div key={link.name} className={classes.wrapperNavLinks}>
                    {link.icon
                        ?<img className={classes.navIcon} src={link.icon} alt="vektor"/>
                        :<span>Error</span>}
                    <NavLink className={classes.navLink} to={`${link.link}`}>{link.name}</NavLink>
                </div>
            ))}
        </div>

    );
};

export default NavLinks;