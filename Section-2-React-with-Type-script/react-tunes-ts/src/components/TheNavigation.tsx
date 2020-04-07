import React from "react";
import { NavLink } from "react-router-dom";

// styles
import styles from './TheNavigation.module.scss';

interface Props {

}

/**
 * 
 */
const TheNavigation: React.FC<Props> = () => {
    return (
        <div className={styles.navigation}>
            <NavLink to="/" activeClassName={styles.active} exact>Home Page</NavLink>
            <NavLink to="/tunes" activeClassName={styles.active}>Tunes</NavLink>
            <NavLink to="/about" activeClassName={styles.active}>About</NavLink>
        </div>
    );
}

export default TheNavigation;