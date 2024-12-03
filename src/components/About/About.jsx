import React from 'react';
import profile from '../../assets/profile.svg';
import styles from '../About/About.module.css';

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

        <div>
            <h2>EXPERIÊNCIA COM</h2>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default About;