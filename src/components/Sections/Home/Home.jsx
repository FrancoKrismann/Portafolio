import React from "react";
import { HomeContainer } from "../../../style";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <HomeContainer id="Inicio">
      <div className={"containerAbout"}>
        <div className={`contenido ${isVisible ? "contenido-visible" : ""}`}>
          <h2 className="h2-info">¡Hola Mundo!</h2>
          <h1>
            Soy
            <br />
            <span>Franco Krismann</span>
          </h1>
          <h3>Desarrollador Web Full Stack</h3>
        </div>
      </div>
    </HomeContainer>
  );
}
