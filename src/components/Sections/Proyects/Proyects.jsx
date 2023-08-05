import React from "react";
import { Proyectscontainer, ProyectCard } from "./Styles";
import { Proyectos } from "./data";
import { FaGithub } from "react-icons/fa6";

export default function Proyects() {
  return (
    <Proyectscontainer id="Proyectos">
      <div className="container">
        <div className="containerTitle">
          <h3>Proyectos</h3>
          <div></div>
        </div>
        <div className="containerCards">
          {Proyectos.map((el) => (
            <ProyectCard key={el.id}>
              <div className="container-img">
                <a href={el.URL} target="_blank" rel="noopener noreferrer">
                  <img src={el.image} alt={el.name} />
                </a>
                <div className="image-shadow"></div>
                <div className="container-Card-Title">
                  <h3>{el.name}</h3>
                </div>
              </div>

              <div className="container-url">
              <a href={el.repo} target="_blank" rel="noopener noreferrer">
                <FaGithub size={"2rem"}/>
                </a>
              </div>
            </ProyectCard>
          ))}
        </div>
      </div>
    </Proyectscontainer>
  );
}
