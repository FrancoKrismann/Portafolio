import styled from "styled-components"

export const Tencnologycontainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
flex-direction: column;
width: 100%;
background-color: #1C2541;

 .containerTitle  {
   align-self:center; 
   margin: 0;
   width: 50%;
   
   /* border: 1px solid yellow; */
   h3 {
     color:#ffff;
   font-size: 35px;
   /* font-weight: 600; */
   font-family: Poppins, sans-serif;
   text-transform: uppercase;
   margin:40px 0 0 0;
   }

   div {
    border-bottom: 2px solid #6FFFE9;
    width: 27%;
   }
}
`

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
gap:20px;
width: 40%;
margin:30px auto;
/* border: 1px solid green; */

/* height: 20vh; */
`


export const CardContainer = styled.div`
display: flex;
margin: 10px auto;
background-color: #0B132B;
height: 9vh;
padding: 5px;
border-radius: 10%;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease, transform 0.3s ease;
overflow: hidden;
cursor: pointer;
position: relative; /* Agregar posición relativa al contenedor de la tarjeta */

/* Estilo para el fondo borroso */
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  z-index: -1; /* Colocar el fondo borroso detrás de la tarjeta */
    opacity: 0; /* Inicialmente oculto */
    transition: opacity 0.3s ease;
}

.card-text {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 50%;
  width: 10vh;
  height: 10vh;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  span {
    font-size: 15px;
    font-weight: 600;
    z-index: 2;
  }
}

&:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px); /* Efecto de elevación en hover */
}

/* Mostrar el fondo borroso en el hover */
&:hover::before {
  opacity: 1;
}

&:hover .card-text {
  opacity: 0.7;
}
`