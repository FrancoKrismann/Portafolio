import React from "react";
import { Contactcontainer } from "./Styles";
import Form from "./Form";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsGithub, BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  return (
    <Contactcontainer>
      <div className="container">
        <div className="container-Title">
          <h3>Contacto</h3>
          <div></div>
        </div>
        <div className="container-components">
          <div className="container-contacts">
            <div className="container-cards">
              <a href="https://www.linkedin.com/in/franco-gabriel-krismann-/">
                <div className="card-contact">
                  <BsLinkedin size={"4rem"} />
                  <div className="-info">
                    <p>LinkedIn</p>
                  </div>
                </div>
              </a>
              <a href="mailto:franco.krismann0707@gmail.com">
                <div className="card-contact">
                  <SiGmail size={"4rem"} />
                  <div className="-info">
                    <p>Correo</p>
                  </div>
                </div>
              </a>
              <a href="https://github.com/FrancoKrismann">
                <div className="card-contact">
                  <BsGithub size={"4rem"} />
                  <div className="-info">
                    <p>Github</p>
                  </div>
                </div>
              </a>
              <a href="https://wa.link/l0iiuu">
                <div className="card-contact">
                  <BsWhatsapp size={"4rem"} />
                  <div className="-info">
                    <p>Whatsapp</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </Contactcontainer>
  );
}
