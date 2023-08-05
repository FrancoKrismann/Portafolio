import styled from "styled-components";

export const Proyectscontainer = styled.div`
  display: flex;
  /* border: 2px solid green; */

  justify-content: center;
  /* align-items: center; */
  /* align-content: center; */
  /* margin: 30px auto; */
  width: 100%;
  /* height: 40rem; */
  /* background-color: #1C2541; */

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    flex-direction: column;
    margin:20px 0 40px 0;

    /* border: 2px solid green; */

    .containerTitle {
      align-self: flex-start;
      /* border: 2px solid yellow; */
      /* width: 50%; */
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
        width: 13.5rem;
      }
    }
  }

  .containerCards {
    /* border: 1px solid red; */
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;

    @media screen and (min-width: 1440px) {
      width: 100%;
    }
  }
`;

export const ProyectCard = styled.div`
  position: relative;
  overflow: hidden; 
  width: 100%;
  /* border-radius: 7px; */
  background-color: #383f56;
  box-shadow: 20px 30px 50px rgba(0, 0, 0, 0.22);
  /* border-radius: inherit; */
  margin: 0;
  
  @media screen and (max-width: 1921px) {
      width: 50%;
    }

  @media screen and (max-width: 1440px) {
      width: 55%;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  
  .container-url {
    display: flex;
    align-items: center;
    justify-content:center;
    height: 60px;
    a {
      text-decoration: none;
      color: inherit;
    }
    
  }

  /* @media screen and (min-width: 1440px) {
      width: 40%;
    } */

  .container-img {
    display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    img{
      width: 100%;
    margin: 0;
    transition: transform 0.3s ease;
    }

   .image-shadow {
    position: absolute;
    display: flex;
    align-self:self-end;
    width: 100%;
    height: 60px; 
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 10),
      rgba(0, 0, 0, 0)
    ); 
   z-index: 1;
  }

  &:hover img {
    transform: scale(1.1); 
  }
  }
  
.container-Card-Title h3 {
    position: absolute;
    bottom: 13%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: #fff;
    /* font-family: sans-serif; */
    margin:0;
    font-size: 2rem;
  }  
  

  


  @media screen and (max-width: 768px) {
  .container-img img{
      width: 100%;
    }
  }

`;
