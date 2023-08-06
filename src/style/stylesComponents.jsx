import styled from "styled-components";


export const NavContainer = styled.nav`
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;

    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.6s ease;
    a {
      font-size: 20px;
      display: block;
    }
    @media (min-width: 769px) {
      position: initial;
      margin: 0;
      a {
        color: white;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-top: 6rem;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: #ffffff;
    }
  }
  .button {
    @media (min-width: 769px) {
      display: none;
    }
  }
`;

export const ButtonNavbar = styled.div`
  .nav-icon-5 {
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-5 span {
    background-color: #fff;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }
  .nav-icon-5 span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .nav-icon-5 span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
  }
  .nav-icon-5 span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }
  .nav-icon-5:not(.open):hover span:nth-child(1) {
    transform: rotate(-3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(2) {
    transform: rotate(3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(3) {
    transform: rotate(-4deg) scaleY(1.1);
  }
  .nav-icon-5.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }
  .nav-icon-5.open span:nth-child(2) {
    opacity: 0;
  }
  .nav-icon-5.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }
`;

export const BgDiv = styled.div`
  background-color: #1c2541;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  &.active {
    border-radius: 0 0 70% 0;
    top: 89px;
    left: 0;
    width: 100%;
    height: 30rem;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  /* flex-direction: row; */
  width: 80%;
  max-width: 1620px;
  height: 800px;

  .containerAbout {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 2px solid blue; */
    /* width: 60rem; */
    flex-wrap: wrap;

    @media screen and (max-width: 769px) {
        width: 70rem;
      }
    
}
.containerAbout h1 {   
    margin: 0;
    padding: 0;
    font-weight: 800;
    font-size: 6rem;
    color:white;
    font-family: Poppins, sans-serif;
    max-width: 100%;

    @media screen and (max-width: 769px) {
        font-size: 4rem;
        
      }
}


.containerAbout span {
    color: rgb(56, 193, 154);
}

.containerAbout h3{

    padding: 0;
    font-size: 2rem;
    color:white;
    font-family: Poppins, sans-serif;
}

.h2-info {
    display: flex;
    align-self: flex-start;
    padding: 0;
    font-size: 2rem;
    color:white;
    font-family: Poppins, sans-serif;
    
}

  .contenido {
    opacity: 0;
    transition: opacity 2s ease-in-out;
  }

  .contenido-visible {
    /* border: 1px solid green; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    opacity: 1;
    flex-wrap: wrap;
    width: 100%;

    /* @media screen and (max-width: 769px) {
        width:1 ;
        
      } */
  }

  button {
  padding: 12.5px 30px;
  border: 0;
  border-radius: 100px;
  background-color: rgb(56, 193, 154);
  color: #ffffff;
  font-weight: Bold;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  cursor: pointer;
}

button:hover {
  background-color: #6fc5ff;
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.1);
}

button:active {
  background-color: #3d94cf;
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
  box-shadow: none;
  transform: scale(0.98);
}
`;
export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* max-width: 1918px; */
  /* overflow: hidden; */
  width: 100%;
  /* height: 100%; */
  background-color: #134074;


`;

