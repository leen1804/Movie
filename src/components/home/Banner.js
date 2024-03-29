import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  .banner {
    height: 100vh;
    background:linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./leen.jpeg);

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
   
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    h1 {
      @media (min-width: 700px) {
        font-size: 80px;
      }
      color: transparent;
      -webkit-text-stroke: 0.8px white;
    }
    button {
      margin-top: 80px;
      background-color: transparent;
      border: 2px solid white;
      color: white;
      border-radius: 10px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
`;
function Banner() {
  return (
    <Wrapper>
      <div className="banner">
        <div className="content">
          <h1>Welcome to Fantastic Films</h1>
          <Link to="/about">
            <button>Browse Films</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;
