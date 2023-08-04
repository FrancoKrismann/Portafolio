import React from 'react'
import {HomeContainer} from "../../../style"
import styles from "./styles.module.css"

export default function Home() {
  return (
    <HomeContainer>
        <div className={styles.containerAbout}>
            <h1>¡Hola Mundo!</h1>
            <h2>Mi nombre es Franco Krismann</h2>
            <h3>Desarrollador Web Full Stack</h3>
        </div>
        
    </HomeContainer>
  )
}
