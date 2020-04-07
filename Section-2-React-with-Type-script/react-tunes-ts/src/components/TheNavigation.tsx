import React from "react";
import { NavLink } from "react-router-dom";

interface Props {

}

/**
 * 
 */
const TheNavigation: React.FC<Props> = () => {
    return (
        <div className="navigation">
            <NavLink to="/" exact>Home Page</NavLink>
            <NavLink to="/tunes">Tunes</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
}

export default TheNavigation;