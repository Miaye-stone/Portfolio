import React, { useState } from "react";
import styles from "./Navbar.module.css";
import menuIcon from "../../assets/menuIcon.png";
import closeIcon from "../../assets/closeIcon.png";

function Navbar() {

    const[openMenu, setOpenMenu]=useState(false);

    return(
        <nav className={styles.container}>
            <a href="/" className={styles.title}>omatsone vivian</a>

            <img className={styles.menuButton} src={openMenu
                ? closeIcon 
                : menuIcon} alt="menu-icon" onClick={() => setOpenMenu(!openMenu)} />
            <div className={styles.menu}>
                <ul className={`${styles.menuItems} ${openMenu && styles.openMenu}`} onClick={() => setOpenMenu(false)}>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar