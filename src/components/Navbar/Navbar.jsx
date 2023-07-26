import React, { useState } from 'react'
import { NavContainer, BgDiv } from '../../style'
import Button from './ButtonResponsive/Button'
export default function Navbar() {

    const [clicked , setClicked] = useState(false)

    const handleButton = () => {
        console.log("Clicked");
        if (window.innerWidth > 768 ) return null
        setClicked(!clicked)
    }
  return (
    <NavContainer >
        <div className={`links ${clicked ? "active" : ""}`}>
            <a onClick={handleButton} href="#Home">Inicio</a>
            <a onClick={handleButton} href="#About">Sobre mi</a>
            <a onClick={handleButton} href="#Tech">Tecnologias</a>
            <a onClick={handleButton} href="#Proyects">Proyectos</a>
            <a onClick={handleButton} href="#Contact">Contacto</a>
        </div>
        <div className='button'>
            <Button clicked={clicked} handleButton={handleButton}/>
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavContainer>
  )
}
