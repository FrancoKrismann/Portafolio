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
    flex-direction: column;
    align-items: center;
    /* border: 1px solid green; */
    width: 80%;

    .container-Title {
      /* border: 1px solid red; */
      align-self: flex-start;
      margin: 0px 0 30px 0;
      h3 {
        color: #ffff;
        font-size: 35px;
        /* font-weight: 600; */
        font-family: Poppins, sans-serif;
        text-transform: uppercase;
        margin: 40px 0 0 0;
      }
      div {
        border-bottom: 2px solid #6fffe9;
        width: 12rem;
      }
    }

    .container-icons {
      background-color:#168c8e ;
      padding: 5px 8px 0px 8px;
      border-radius: 8px;
      border:1px solid #000000;
    }
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
border: inherit;
border-radius: 10px;
box-shadow: 20px 30px 50px rgba(0, 0, 0, 0.22);

.container-inputs {
  display: flex;
  flex-direction: column;
   label {
    color: #ffff;
   }
}
`