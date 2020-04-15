import React from "react";
import { NavLink } from "react-router-dom";

// styles
import styles from './TheNavigation.module.scss';

interface Props {
    // Optional typ v typeScripte je ?
    // Mozes sem kludne poslat aj nejaku hodnotu premennej cez: brand = {nieco}
    brand?: string;
    howMany?: number;
}

/**
 * 
 */
const TheNavigation: React.FC<Props> = (props) => { 
    // Mozes si vsetky props rozhodit takto do konstant
    // v REACTE props su nemenne, ty nesmies zmenit hodnotu v props
    const {brand, howMany} = props;


    return (
        <div className={styles.navigation}>
            <span>
    This is a <strong>{brand || 'este nejaky iny'}</strong> + <strong>{howMany}</strong>
            </span>

            <NavLink to="/" activeClassName={styles.active} exact>Home Page</NavLink>
            <NavLink to="/tunes" activeClassName={styles.active}>Tunes</NavLink>
            <NavLink to="/about" activeClassName={styles.active}>About</NavLink>
        </div>
    );
}

export default TheNavigation;