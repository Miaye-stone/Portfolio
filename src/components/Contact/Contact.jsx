import React from "react";
import contact from "../../data/contact.json";
import arrowIcon from "../../assets/arrowIcon.png";
import styles from "./Contact.module.css";

function Contact() {
    return(
        <section className={styles.container} id="contact">
            <h2 className={styles.title}>Contact Me</h2>

            <div className={styles.socials}>
                {contact.map((contact, id) => {
                    return (
                        <a href={contact.socialLink} key={id}>
                        {contact.socialPlatform} <img src={arrowIcon}/>
                        </a>
                    )
                })}
            </div>
        </section>
    );
}

export default Contact