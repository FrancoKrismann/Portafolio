import React from 'react'
import styles from "./styles.module.css"
import { Home ,About, Tecn} from '../Sections'
import { PageContainer } from '../../style'




export default function Main() {
  return (
    <div className={styles.containerWeb}>
      <div className={styles.containerHome}>
          <Home/>
        </div>
      <PageContainer>
          <About/>
          <Tecn/>
      </PageContainer>
    </div>
    
  )
}
