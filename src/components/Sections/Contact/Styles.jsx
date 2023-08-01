import styled from "styled-components";



export const Contactcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  /* height: 30rem; */
  background-color: #1c2541;

  .container {
    display: flex;
    justify-content: center;
    border: 1px solid green;
    width: 80%;
  }
`


export const FormContainer = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #efecf2;
width: 35%;
height: 35rem;

.container-inputs {
  display: flex;
  flex-direction: column;
   label {
    color: #ffff;
   }
}
`