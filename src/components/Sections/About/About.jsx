import React from "react";
import { Aboutcontainer } from "./Styles";
import image from "../../../images/profile-pic (5).png"


export default function About() {
  return (
    <Aboutcontainer id="About">
      <div className="container">
        <div className="container-title">
          <h3>Sobre mi</h3>
          <div></div>
        </div>
        <div className="container-items">
          <div className="container-perfil">
          <div>
            <img src={image} alt="perfil"/>
        </div>
          </div>
          <div className="container-info">
            <div>
              <p>
                👋¡Hola! Mi nombre es Franco Krismann, tengo 21 años y soy
                originario de la provincia de Neuquén, Argentina.
              </p>
            </div>
            <div>
              <h3>EDUCACIÓN 📚</h3>
              <p>
                Recientemente, me gradué de Henry, una academia de programación
                full stack web altamente valorada con mas de 700 horas de
                cursado teórico y practico, incluyendo proyectos individuales y
                grupales. Durante mi tiempo en la academia, tuve el honor de ser
                seleccionado como líder de un grupo con el rol de TA's, lo que
                me permitió compartir mis conocimientos y habilidades con otros
                estudiantes y contribuir a su éxito en el programa.
              </p>
            </div>
            <div>
              <h3>EXPERIENCIA LABORAL 💼</h3>
              <p>
                Aunque actualmente no tengo experiencia laboral en el campo de
                la programación, estoy extremadamente motivado y apasionado por
                el desarrollo web y estoy seguro de que mi formación en Henry me
                ha proporcionado una base sólida para enfrentar cualquier
                desafío que pueda presentarse. Espero tener la oportunidad de
                trabajar en proyectos emocionantes y seguir aprendiendo y
                creciendo como desarrollador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Aboutcontainer>
  );
}
