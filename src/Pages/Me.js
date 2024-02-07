import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
display:flex;
 justify-content:center;
 align-items:center;
 text-align:center;
 h1{
 margin-bottom:40px;}
 h3{
    margin:20px;
 }
`;

export default function Me() {
  return (
    <Wrapper>
        <div>
        <h1>Developer Information</h1>
      <h3>Name : Eillen Mutiti</h3>
      <h3>Email : ruvarashemutitieillen@gmail.com</h3>
      <h3> Phone Number :0774362077</h3>
        </div>
      
    </Wrapper>
  );
}
