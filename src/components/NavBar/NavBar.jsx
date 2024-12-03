import React from 'react';
import styles from '../NavBar/NavBar.module.css';


function NavBar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            Sávio Rodrigues
        </div>
        <div className={styles.menu}>
            <a href="#">Home</a>
            <a href="#">Projetos</a>
            <a href="#">Experiência</a>
            <a href="#">Contato</a>
        </div>
    </div>
  )
}

export default NavBar