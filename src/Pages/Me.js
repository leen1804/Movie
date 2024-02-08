import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height:100vh;
  h1 {
    margin-bottom: 40px;
  }
  h3 {
    margin: 20px;
  }
  .lee {
    border: 2px solid black;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 10px;
    margin-top: 80px;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px black;
    }

    &:active {
      transform: scale(0.9);
    }
    @media (min-width: 665px) {
    padding:40px;
    }
  }
`;

export default function Me() {
  return (
    <Wrapper>
      <div className="lee">
        <h1>Developer Information</h1>
        <h3>Name : Eillen Mutiti</h3>
        <h3>Email : ruvarashemutitieillen@gmail.com</h3>
        <h3> Phone Number :0774362077</h3>
      </div>
    </Wrapper>
  );
}
