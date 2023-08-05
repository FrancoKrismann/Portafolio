import React from 'react'
import styles from "./styles.module.css"
import { Home ,About, Tecn, Proyects, Contact} from '../Sections'
import { PageContainer } from '../../style'
import { Element } from 'react-scroll';





export default function Main() {
  return (
    <div className={styles.containerWeb}>
      <div className={styles.containerHome}>
          <Home/>
        </div>
      <PageContainer>
          <About/>
          <Tecn/>
          <Proyects/>
          <Contact/>
      </PageContainer>
    </div>
    
  )
}
