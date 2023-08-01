import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FormContainer } from "./Styles";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    const serviceId = "service_1ygmkrc";
    const templateId = "template_8t0uyic";
    const apiKey = "wA2P2eKgLCZLNZpMb";
    emailjs.sendForm(serviceId, templateId, form.current, apiKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (

    <FormContainer ref={form} onSubmit={sendEmail}>
      <h2>Correo</h2>
      <div className="container-inputs">
        <label>Nombre</label>
        <input type="text" name="nombre" />
      </div>
      <div className="container-inputs">
        <label>Correo</label>
        <input type="text" name="email" />
      </div>
      <div className="container-inputs">
          <label>Mensaje</label>
          <textarea className="Message" name="message" />
      </div>
      <input type="submit" value="Enviar" />
    </FormContainer>
  );
}
