import React from "react";
import styled from "styled-components";
// import googlePlay from "../assets/googlePlay.png";
// import appStore from "../assets/appleStore.png";
// import screens from "../assets/screens.png";

export default function Addon() {
  return (
    <Section>
      <div className="info">
        <h1>Connect Now With Our Community </h1>
        <div className="downloads">
          {/* <img src={googlePlay} alt="google Play" /> */}
          {/* <img src={appStore} alt="apple store" /> */}
        </div>
      </div>
      {/* <img src={screens} alt="screens" className="screens" /> */}
    </Section>
  );
}

const Section = styled.section`
z-index:-333;
  height: 15rem;
  width: 90%;
  border-radius:20px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  margin: 5rem auto;
  background: linear-gradient(to right, #a6f2f2, #ddf181);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  position: relative;
  overflow: hidden;
  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-size: 3rem;
      width: 60%;
    }
    .downloads {
      display: flex;
      gap: 1rem;
      img {
        height: 3rem;
        cursor: pointer;
      }
    }
  }
  .screens {
    height: 22rem;
    position: absolute;
    bottom: -2rem;
    right: 1rem;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    gap: 4rem;
    padding: 2rem;
    .info {
      h1 {
        font-size: 2rem;
        width: 100%;
      }
    }
    .screens {
      position: initial;
      height: 15rem;
    }
  }
`;