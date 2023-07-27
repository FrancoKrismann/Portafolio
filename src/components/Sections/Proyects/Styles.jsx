import styled from "styled-components";

export const Proyectscontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 30px auto;
  width: 100%;
  /* height: 100px; */
  /* background-color: #1C2541; */

  .container {
    display: flex;
    width: 80%;
    flex-direction: column;
    /* border: 2px solid green; */

    .containerTitle {
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
        width: 27%;
      }
    }
  }

  .containerCards {
    /* border: 2px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const ProyectCard = styled.div`
  box-sizing: border-box;
  /* width: 20px; */
  /* height: 20px; */
  background: rgba(20, 20, 20, 0.58);
  border: inherit;
  box-shadow: 20px 20px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  /* border-radius: 17px; */
  /* text-align: center; */
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  /* user-select: none;
  font-weight: bolder; */
  color: black;

  .container-img {
    display: flex;
    margin:20px 5px 10px 5px;
    img {
        /* border: 3px solid white; */
        object-fit: cover;
        border-radius: 10px;
        height:14vw;
    }
  }
  .container-Card-Title {
    position: relative;
    top: 0;
    bottom: 0;
  }
  &:hover {
    /* border: 1px solid black; */
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;


