import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormContainer } from "./Styles";
import { validationForm } from "./validation";
import { Toaster,toast } from "react-hot-toast";

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
    
    toast.success("Enviado")
    emailjs.sendForm(serviceId, templateId, form.current, apiKey).then(
      (result) => {
        
        console.log(result.text,"success emailjs send");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  // const successEmail = () => {
  //   console.log("Enviado");
  //   toast.success("Enviado")
  // }

  return (
    <FormContainer ref={form} onSubmit={sendEmail}>
       <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#05af8a",
            color: "#fff",
            fontSize: 18
          },

          // Default options for specific types
          success: {
            duration: 4000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
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
      <input  className="button-submit" type="submit" value="Enviar" />

    </FormContainer>
  );
}
