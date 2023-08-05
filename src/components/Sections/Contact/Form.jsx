import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormContainer } from "./Styles";
import { validationForm } from "./validation";

export default function Form() {
  const form = useRef();

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_1ygmkrc";
    const templateId = "template_8t0uyic";
    const apiKey = "wA2P2eKgLCZLNZpMb";

    const { nombre,email, message } = values;
    const validationErrors = validationForm(nombre,email, message);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return null
    }

    emailjs.sendForm(serviceId, templateId, form.current, apiKey).then(
      (result) => {
        console.log(result.text,"success emailjs send");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <FormContainer ref={form} onSubmit={sendEmail}>
      <div className="container-inputs">
        <label>Nombre</label>
        <input
          type="text"
          value={values.nombre}
          name="nombre"
          onChange={handleInputChange}
        />
        <div className="container-errors">
        {errors.nombre && <p className='errors'>{errors.nombre}</p>}
        </div>
      </div>
      <div className="container-inputs">
        <label>Correo</label>
        <input
          type="text"
          value={values.email}
          name="email"
          onChange={handleInputChange}
        />
        <div className="container-errors">
        {errors.email && <p className='errors'>{errors.email}</p>}
        </div>
      </div>
      <div className="container-inputs">
        <label>Mensaje</label>
        <textarea
          className="Message"
          value={values.message}
          name="message"
          onChange={handleInputChange}
        />
        <div className="container-errors">
        {errors.message && <p className='errors'>{errors.message}</p>}
        </div>
      </div>
      <input className="button-submit" type="submit" value="Enviar" />
    </FormContainer>
  );
}
