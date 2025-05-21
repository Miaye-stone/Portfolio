import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/heroImage.png";

function Hero() {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroImage}>
                <img src={heroImage} alt="Hero-image"/>
            </div>
            
            <div className={styles.heroQuote}>
                <p>"Crafting Code With Color & Calm"</p>
            </div>

            <div className={styles.content}>
                <h1>Hi, I’m Vivian</h1>
                <p>A front-end developer who finds beauty in code and creativity in interaction. I turn ideas into smooth, responsive experiences using HTML, CSS, JavaScript, and React.</p>

                <div className={styles.btn}><a>Contact me</a></div>
                
            </div>

            <div />
        </section>
    );
}

export default Hero;