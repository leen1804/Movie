import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const Wrapper = styled.div`
  .header {
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: absolute;
    width: 100%;
    @media (min-width: 990px) {
    }
  }
  /* padding: 10px; */
  background: white;

  img {
    width: 25%;
    display: flex;
    justify-content: flex-start;
    /* text-align:center;
    align-items:center; */
    margin: 0 auto;
    margin-left: 2%;
    z-index: 4;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px black;
    }

    &:active {
      transform: scale(0.9);
    }
    @media (max-width: 1030px) {
      img {
        width: 35%;
      }
    }
  }
  ul {
    position: absolute;
    width: 100%;
    height: 54vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-content: center;
    flex-direction: column;
    list-style: none;
    max-width: 0;
    top: 0%;
    left: 0%;
    transition: all 0.4s ease-out;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    background: black;
    @media (min-width: 1200px) {
      height: 100vh;
    }
    a {
      padding: 20px;
      font-size: 19px;
      text-decoration: none;
      color: white;

      transition: 2s;
      @media (min-width: 1200px) {
        padding: 20px 30px;
      }
    }
    a:hover {
      color: gray;
      box-shadow: 0 0 50px rgba(255, 255, 255, 0.5);
    }
  }
  .hamburger {
    padding: 20px 20px 33px 30px;
    position: relative;
    z-index: 4;
    margin-right: 20px;
    @media (max-width: 667px) {
      margin-right: 37px;
    }
  }
  @media (min-width: 768px) {
    .hamburger {
      padding: 50px 60px 55px 35px;
    }
  }
  @media (min-width: 1024px) {
    .hamburger {
    }
  }
  span {
    width: 35px;
    height: 3px;
    background: white;
    position: absolute;
    border-radius: 7px;
    transition: transform 0.3s;
    &:before {
      width: 80%;
      height: 100%;
      background: white;
      border-radius: 10px;
      position: absolute;
      top: -7px;
      content: "";
      transition: all 0.3s ease-out;
    }
    &:after {
      width: 60%;
      height: 100%;
      background: white;
      border-radius: 10px;
      position: absolute;
      top: 7px;
      content: "";
      transition: all 0.3s ease-out;
    }
  }
  .open {
    span {
      background: transparent;
      &:before {
        top: 0;
        transform: rotate(495deg);
      }
      &:after {
        top: 0;
        transform: rotate(-495deg);
      }
    }
  }
  .change {
    max-width: 91%;
    @media (min-width: 1200px) {
      max-width: 38.9%;
      height: 100vh;
      border-right: 1px white solid;
      border-radius: 10px;
      box-shadow: ${({ isBlackShadow }) =>
        isBlackShadow ? "0 0 30px black" : " 0 0 20px rgba(255, 255, 255, 0.5)"};
    }
  }
`;

function Burger() {
  const [checked, setChecked] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/Me";
  const isBlackShadow = location.pathname !== "/";

  const handleClick = () => {
    setChecked(false);
  };

  return (
    <Wrapper className="wrap" isBlackShadow={isBlackShadow}>
      <div
        className="header"
        style={{ position: isHomePage ? "absolute" : "relative" }}
      >
        <img src="./brand.png" className="logo" alt="" />

        <div
          className={checked ? "hamburger open" : "hamburger"}
          onClick={() => setChecked(!checked)}
        >
          <span></span>
        </div>
        <ul className={checked ? "menu change" : "menu"}>
          <NavLink className="nav-link" to="/" exact onClick={handleClick}>
            <li>
              <a href="">Home</a>
            </li>
          </NavLink>
          <NavLink className="nav-link" to="/About" exact onClick={handleClick}>
            <li>
              <a href="">Popular Films</a>
            </li>
          </NavLink>
          <NavLink className="nav-link" to="/Me" exact onClick={handleClick}>
            <li>
              <a href="">About the developer</a>
            </li>
          </NavLink>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Burger;
