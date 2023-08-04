import styled from "styled-components"

export const Aboutcontainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
flex-direction: column;
width: 100%;
 .container-title {
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
    width: 80%;
    margin:20px auto;
    /* border: 1px solid red; */



    .container-items {
      display: flex;
      width: 80%;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #0f172a;
      border-radius:10px;
      border:inherit;    
    }
    
    .container-perfil{
      width: 35rem;
      height: 30rem;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      align-items:center;
      border: 1px solid green;

      img {
        width:15rem;
        border:3px solid white;
        border-radius: 50%;
      }
    }

    .container-info {
      display: flex;
      /* align-self: flex-start; */
      border: 1px solid red;
      flex-direction: column;
      width: 30rem;
    }
}



`