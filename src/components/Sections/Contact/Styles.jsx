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
    margin: 30px auto;

    .container-components{
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      gap:30px;
      
    }

    .container-contacts {
      
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-start;
      flex-direction: column;
      background-color: #0f172a;
      width: 40rem;
      height: 30rem;
      border: inherit;
      
      border-radius: 10px;
      box-shadow: 20px 30px 50px rgba(0, 0, 0, 0.22);
    }

    .container-cards {
      /* border: 1px solid green; */
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      gap:50px;
      color:#fff;
      
      a{
          text-decoration: none;
      color: inherit;
        }
      .card-contact {
        display: flex;
        flex-direction:row;
        width: 13rem;
        padding: 20px 20px 20px 20px;
        border-radius: 10px;
        transition: transform 0.3s ease-in-out;
        --tw-bg-opacity: 1;
        background-color: rgb(51 65 85/var(--tw-bg-opacity));

       
        
        .-info {
          margin:0 0 0 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
      }

      .card-contact:hover {
        transform: scale(1.1);
      }
    }

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
      background-color: #168c8e;
      padding: 5px 8px 0px 8px;
      border-radius: 8px;
      border: 1px solid #000000;
      margin: 20px auto;
    }

  }
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0f172a;
  width: 25rem;
  height: 30rem;
  border: inherit;
  border-radius: 10px;
  box-shadow: 20px 30px 50px rgba(0, 0, 0, 0.22);

  .container-inputs {
    display: flex;
    flex-direction: column;
    /* margin:px auto; */
    label {
      color: #ffff;
      font-weight: 700;
      font-size: 20px;
    }
    input {
      border-radius: 6px;
      width: 17rem;
      height: 1.5rem;
    }
    textarea {
      border-radius: 6px;
      width: 19rem;
      height: 18rem;
      max-width: 19rem;
      min-width: 19rem;
      max-height: 130px;
      min-height: 130px;
    }

    input:focus {
      outline: none;
      border-color: #078a76;
    }

    textarea:focus {
      outline: none;
      border-color: #078a76;
    }

    .container-errors {
      height: 20px;
      /* border:1px solid green; */
      /* margin:5px auto; */
      p {
        font-weight: 700;
        margin: 0;
        padding: 0;
        color: red;
      }
    }
  }

  .button-submit {
    border-radius: 13px;
    font-family: inherit;
    font-weight: 600;
    background: #fff;
    border: 1px solid #fff;
    height: 40px;
    width: 10rem;
    font-size: 18px;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .button-submit:hover {
    background-color: #13998e;
    border-color: #0b0b0b;
  }
`;
