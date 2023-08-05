import styled from "styled-components";

export const Aboutcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  /* height: 45rem; */
  margin:40px 0 40px 0;
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
    margin: 20px auto;
    /* border: 1px solid red; */

    .container-items {
      display: flex;
      flex-wrap: wrap;
      gap: 100px;
      width: 100%;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #0f172a;
      border-radius: 10px;
      border: inherit;

      @media screen and (max-width: 768px) {
        gap: 0px;
        }
    }

    .container-perfil {
      /* width: 25rem; */
      display: flex;
      align-items: flex-start;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      /* border: 1px solid green; */

      img {
        width: 15rem;
        border: 3px solid white;
        border-radius: 50%;
      }
    }

    .container-info {
      display: flex;
      /* align-self: flex-start; */
      /* border: 1px solid red; */
      flex-direction: column;
      width: 60%;
      margin:20px 0 20px 0;
      font-family: Poppins, sans-serif;
      .div-1 {
        display: flex;
        height: 7rem;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 768px) {
          height: 10rem;
        }

        @media screen and (max-width: 400px) {
          height: 12rem;
        }
      }
      h4 {
        color: #fff;
        font-size: 1.6rem;
        font-weight: 800;
      }
      span {
        color: rgb(56, 193, 154);
      }
      .div-2 {
        display: flex;
        height: 5rem;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 768px) {
          height: 8rem;
        }

        @media screen and (max-width: 400px) {
          height: 17rem;
        }
      }
      .first-p {
        font-size: 1.3rem;
        font-weight: 600;
        color: #fff;
      }
      p {
        color: #fff;
        font-weight: 600;

        font-size: 1rem;
      }
    }
  }
`;
