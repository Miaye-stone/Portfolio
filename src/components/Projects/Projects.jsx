import React from "react";
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import arrowIcon from "../../assets/arrowIcon.png"

function Projects() {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>

            <div className={styles.projects}>
                {projects.map ((project, id) =>{
                    return (
                        <div key={id} className={styles.card}>
                           <div className={styles.details}>
                                <img src={project.imageSource} alt={project.projectName} className={styles.projectImage}/>

                                <section className={styles.projectInfo}>
                                    <h3>{project.projectName}</h3>
                                    <p>{project.description}</p>

                            
                                        <ul className= {styles.tech}>
                                            {project.techStack.map((stack, id) => {
                                                return (
                                                    <li key={id}>{stack}</li>
                                                    // <li key={id}>{link}</li>
                                                );
                                            })}
                                        </ul>

                                        <div className={styles.linkbtn}>
                                            {project.links.map ((link, id) => {
                                                return (
                                                    <a href={link.platformLink}>{link.platform} 
                                                    {/* //<img src={arrowIcon} /> */}
                                                    </a>
                                                )
                                            })}
                                        </div>
                                    
                                </section>
                           </div>
                            
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects