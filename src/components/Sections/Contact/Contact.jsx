import React from 'react'
import { Contactcontainer } from './Styles'
import Form from './Form'
import {SiGmail} from "react-icons/si"

export default function Contact() {
  return (
    <Contactcontainer>
        <div className='container'>
            <div className='container-Title'>
              <h3>Contacto</h3>
              <div></div>
            </div>
            <Form/>
            <div className='container-icons'>
              <SiGmail size={"2.5rem"}/>
            </div>
            
            
            
        </div>
    </Contactcontainer>
  )
}
