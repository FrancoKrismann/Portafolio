import React from "react";
import { Aboutcontainer } from "./Styles";
import image from "../../../images/profile-pic (5).png";

export default function About() {
  return (
    <Aboutcontainer id="Sobre">
      <div className="container">
        <div className="container-title">
          <h3>Sobre mi</h3>
          <div></div>
        </div>
        <div className="container-items">
          <div className="container-perfil">
            <div>
              <img src={image} alt="perfil" />
            </div>
          </div>
          <div className="container-info">
            <div className="div-1">
              <h4>Soy Franco Krismann<br/>  
                <span>
                  desarrollador Web Full Stack.
                  </span>
                  </h4>
            </div>
            <div className="div-2">
              <h6 className="first-p">
                Cuento con experiencia en proyectos utilizando tecnologías como
                &nbsp;<span>JavaScript, React.Js, Redux, Node.Js, Express y PostgreSQL</span>
                ,
                entre otras.
              </h6>
            </div>
            <div>
              <p>
                He participado en la realización de varios proyectos
                individuales y grupales, aplicando la metodología SCRUM con
                sprints semanales. Además de mi experiencia en desarrollo,
                también he desempeñado el rol de Teaching Assistant en HENRY.
                <br/>
                Estas experiencias me han permitido desarrollar habilidades de
                liderazgo, capacidad de escucha activa, trabajo en equipo y un
                fuerte compromiso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Aboutcontainer>
  );
}
