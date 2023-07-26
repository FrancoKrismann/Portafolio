import React from 'react'
import {HomeContainer} from "../../../style"
import styles from "./styles.module.css"
import image from "../../../images/profile-pic (5).png"

export default function Home() {
  return (
    <HomeContainer>
        <div className={styles.containerAbout}>
            <h1>¡Hola Mundo!</h1>
            <h2>Mi nombre es Franco Krismann</h2>
            <h3>Desarrollador Web Full Stack</h3>
        </div>
        <div className={styles.containerImage}>
            <img src={image} alt="perfil"/>
        </div>
    </HomeContainer>
  )
}
