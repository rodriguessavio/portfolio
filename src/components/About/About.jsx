import React from 'react';
import profile from '../../assets/profile.svg';
import styles from '../About/About.module.css';
import js from '../../assets/icons/js.svg';
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import react from '../../assets/icons/react.svg';

function About() {
  return (
    <div className={styles.about}>
        <img src={profile} alt="" className={styles.profileimg}/>
        <p className={styles.title}>Transformando ideias em <span>código!</span></p>
        <p className={styles.about_content}>
            Me chamo Sávio Rodrigues, sou aspirante a desenvolvedor backend. 
            Atualmente direciono meus estudos ao desenvolvimento web back-end com laravel, desenvolvendo aplicações performáticas e fluídas. Além de permanecer aprimorando meus conhecimentos 
            em git, html, css, php e js.
        </p>
        <a href="" className={styles.downloadcv}>Download CV</a>

        <div className={styles.icon}>
            <h2>EXPERIÊNCIA COM</h2>
            <div className={styles.icons_image}>
              <img src={js} alt="" />
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={react} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About;