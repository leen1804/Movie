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
        <h1>Developers Information</h1>
        <h3>Name : Leeroy Sindiso N0222417Q  </h3>
      <h3> Victoria Nxumalo N02219387Y</h3>
      <h3>Sethukile Nyathi N02222156M</h3>
      </div>
    </Wrapper>
  );
}
