import React from 'react';
import styles from '../Projects/Projects.module.css';
import html from '../../assets/projects/html.svg';
import arrow from '../../assets/icons/arrow.svg';

function Projects() {
  return (
    <div className={styles.projects}>
        <h1 className={styles.title}>PROJETOS</h1>
        <div className={styles.content}>
            <div className={styles.card}>
                <img src={html} alt="" />
                <a href="" className={styles.link_project}>
                  <p>Clique aqui para visitar</p>
                  <p>HTML TUTORIAL</p>
                  <img src={arrow} alt="" />
                </a>
            </div>

            <div className={styles.card}>
                <img src={html} alt="" />
                <a href="" className={styles.link_project}>
                  <p>Clique aqui para visitar</p>
                  <p>HTML TUTORIAL</p>
                  <img src={arrow} alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects;