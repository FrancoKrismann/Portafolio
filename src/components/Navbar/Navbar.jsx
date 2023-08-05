import React, { useState } from 'react'
import { NavContainer, BgDiv } from '../../style'
import { Link } from 'react-scroll'
import Button from './ButtonResponsive/Button'
export default function Navbar() {

    const [clicked , setClicked] = useState(false)

    const handleButton = () => {
        if (window.innerWidth > 769 ) return null
        setClicked(!clicked)
    }
  return (
    <NavContainer >
        <div className={`links ${clicked ? "active" : ""}`}>
            <Link style={{"cursor":"pointer"}} to="Inicio" spy={true} smooth={true} offset={-100} duration={500} onClick={handleButton}>Inicio</Link>
            <Link style={{"cursor":"pointer"}} to='Sobre' spy={true} smooth={true} offset={-100} duration={500} onClick={handleButton}>Sobre mi</Link>
            <Link style={{"cursor":"pointer"}} to='Tecnologias' spy={true} smooth={true} offset={-100} duration={500} onClick={handleButton}>Tecnologias</Link>
            <Link style={{"cursor":"pointer"}} to="Proyectos" spy={true} smooth={true} offset={-90} duration={500} onClick={handleButton}>Proyectos</Link>
            <Link style={{"cursor":"pointer"}} to='Contacto' spy={true} smooth={true} offset={-100} duration={500} onClick={handleButton}>Contacto</Link>
        </div>
        <div className='button'>
            <Button clicked={clicked} handleButton={handleButton}/>
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavContainer>
  )
}
