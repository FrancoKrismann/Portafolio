import React from "react";
import { Aboutcontainer } from "./Styles";
import styles from "./styles.module.css";

export default function About() {
  return (
    <Aboutcontainer id="About">
      <div className={styles.SectionAbout}>
        <div className={styles.DivTitle}>
          <h2>Sobre mi</h2>
        </div>
        <div className={styles.DivContent}>
          <div className={styles.content}>
            <p className={styles.parraf}>
              👋¡Hola! Mi nombre es Franco Krismann, tengo 21 años y soy
              originario de la provincia de Neuquén, Argentina.
            </p>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>EDUCACIÓN 📚</h3>
            <p className={styles.parraf}>
              Recientemente, me gradué de Henry, una academia de programación
              full stack web altamente valorada con mas de 700 horas de cursado
              teórico y practico, incluyendo proyectos individuales y grupales.
              Durante mi tiempo en la academia, tuve el honor de ser
              seleccionado como líder de un grupo con el rol de TA's, lo que me
              permitió compartir mis conocimientos y habilidades con otros
              estudiantes y contribuir a su éxito en el programa.
            </p>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>EXPERIENCIA LABORAL 💼</h3>
            <p className={styles.parraf}>
              Aunque actualmente no tengo experiencia laboral en el campo de la
              programación, estoy extremadamente motivado y apasionado por el
              desarrollo web y estoy seguro de que mi formación en Henry me ha
              proporcionado una base sólida para enfrentar cualquier desafío que
              pueda presentarse. Espero tener la oportunidad de trabajar en
              proyectos emocionantes y seguir aprendiendo y creciendo como
              desarrollador.
            </p>
          </div>
          {/* <h3>SACAR ESTO DE ACA</h3>
CONTACTO 📞<br/>
<br/>
📧 Gmail: franco.krismann0707@gmail.com<br/>
💻 GitHub: <a href='https://github.com/FrancoKrismann'>https://github.com/FrancoKrismann</a><br/>
📃 Curriculum: <a href='https://drive.google.com/file/d/1ra9EevdRdqDXRV1Ge8c4fy2SqaGm_OuB/view?usp=sharing'>https://drive.google.com/file/d/1ra9EevdRdqDXRV1Ge8c4fy2SqaGm_OuB/view?usp=sharing
</a><br/> */}
        </div>
      </div>
    </Aboutcontainer>
  );
}
