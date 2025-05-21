import React from "react";
import experience from "../../data/experience.json";
import styles from "./Experience.module.css";

function Experience() {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>

            <div className={styles.experiences}>
                {experience.map((experience, id) => {
                    return (
                        <div key={id} className={styles.card}>
                            <img src={`${import.meta.env.BASE_URL}${experience.imageSrc}`} alt={experience.company} />

                            <div className={styles.cardDetails}>
                                <h3>{experience.jobTitle},{experience.company}</h3>
                                <p>{experience.date}</p>
                                <ul>
                                    {experience.achievement.map ((achievement, id) => {
                                        return (
                                            <li key={id}>{achievement}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Experience