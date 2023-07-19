import React from 'react'
import styles from "./styles.module.css"
import { Home } from '../Sections'



export default function Main() {
  return (
    <div className={styles.containerWeb}>
      <div className={styles.containerHome}>
          <Home/>
        </div>
      <div className={styles.containerPage}>
        
      </div>
    </div>
    
  )
}
