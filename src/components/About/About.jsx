import React from "react";
import skills from "../../data/skills.json";
import aboutImage from "../../assets/aboutImage.png";

import styles from "./About.module.css";

function About() {
    return (
        <section className={styles.container} id="about">
            <div className={styles.aboutSect}>
                <div className={styles.aboutTitle}><h2>About Me</h2></div>

                <div className={styles.aboutDescription}>
                    <p>
                        A front-end developer who finds beauty in code and creativity in interaction. I’m a front-end developer with a background in UI/UX design, recently transitioning fully into development because I found myself drawn more to the calm and clarity of writing code. I build user-friendly, interactive, and accessible websites with modern tools like React, JavaScript, CSS, and HTML.
                        I’m usually diving into new frontend challenges that push me forward, Learning a new skill or, I turn ideas into smooth, responsive experiences.
                    </p>
                </div>

                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} >
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.aboutImage}>
                <img src={`${import.meta.env.BASE_URL}${aboutImage}`} alt="About Image" />
            </div>
        </section>
    );
};

export default About;