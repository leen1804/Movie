import React, {useState , useEffect} from "react";
import styled from 'styled-components'
import { NavLink ,useLocation,Link } from 'react-router-dom';

 

const Wrapper = styled.div`
.header{
    background: #005180;
    width:100%;
    @media(min-width:990px){ 
    background:#D69E2E; 
     position:absolute;
  }
    display: flex;
    justify-content:center;
    align-items:center;
    padding:0;
   
    &.scrolled {
      background: yellow; // Change this to the desired color
      transition: background 0.3s ease-in-out;
    } 
}
  /* padding: 10px; */
  background: white;
  

  .img{
    width:20%;
    display: flex;
    justify-content:flex-start;
    /* text-align:center;
    align-items:center; */
    margin: 0 auto;
    margin-left: 2%;
    z-index:4;
   

    @media(min-width:992px){
width: 20%;
    }
    @media(min-width:1000px){
width:28%;
margin-left: -2%;
    }
    
}
ul{
    position:absolute;
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    justify-content:center;
    flex-direction:column;
    list-style:none;
    max-height:0;
    top:0%;
    transition:all 0.4s ease-out;
    margin:0px;
    padding: 0px;
    overflow:hidden;
    background:#005180; 

    @media(min-width:1000px){
  justify-content:flex-end;
      max-height:100%; 
      top:18%;
      margin-right:30px;
     
}

        

     
        .leen:hover {
          background-color: transparent;
          color: black;
        }
      
    .a{
        padding: 29px;
        
font-size: 17px;
color: black;
font-weight: 600;
line-height: 14px;


a:hover {
          
          color: blue;
        }
        @media(max-width:1215px){
          font-size: 12px;
    }
    }
    
    @media(min-width:992px){
 position: relative;
      max-height:unset; 
      top:0%;
      flex-direction: row ;
      background: transparent;
      height:unset;
      
}

li a{
  color: black;
}  


}
.hamburger{
    padding:20px 20px 33px 30px ;
    position:relative;
    z-index:4;
    margin-right: 20px;

}
@media(min-width:768px){
      .img{
        
      }
      .hamburger{
        padding:50px 60px 55px 35px ;
      }
      
    }
    @media(min-width:990px){
      .hamburger{
      display: none;
    }
    }
span{
    width: 30px;
      height: 3px;
      background: white;
      position: absolute;
      border-radius: 7px;
      transition: transform 0.3s;
      &:before{
        width:100%;
        height:100%;
        background:white;
        border-radius:10px;
        position:absolute;
        top:-7px;
        content:"";
        transition:all 0.3s ease-out; 
      }
      &:after{
        width:100%;
        height:100%;
        background:white;
        border-radius:10px;
        position:absolute;
        top:7px;
        content:"";
        transition:all 0.3s ease-out;


      }
}
.open{

  span  {
    background:transparent;
&:before{
    top:0;
    transform:rotate(495deg)
}
&:after{
    top:0;
    transform:rotate(-495deg)
}

    }
}
.change{
max-height:91%;
}

   
.white-link a {
  color: rgb(74, 90, 249);
  a:hover{
  color:gray;
}
}
 ul .white-linky  a{
 color:rgb(74, 90, 249);
 display: inline-block;
          padding: 8px 13px;
          background-color: white; 
          
          text-decoration: none;
          
          border-radius:5px;
          transition: background-color 0.3s, color 0.3s, opacity 0.3s;
}
@media(min-width:990px){
  
  .header{
padding-top:32px;
  }
   .img{
    padding-left:83px;
  }
  ul{
    margin-right:60px;
  }
  
}
ul .leen{
    border :2px solid white ;
    border-radius:33px;
    padding:8px 23px 8px 21px;
    background:none;
  }
  ul li a {
     color:rgb(73, 80, 87);
     text-decoration:none;

  }

`;



function Header() {
  const [checked, setChecked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [zIndex, setZIndex] = useState(4); 
  const location = useLocation();
  const isDonatePage = location.pathname === '/Donate';
  const whiteLinkPages = ['/Contact', '/HireUs'];

  const isWhiteLinkPage = whiteLinkPages.includes(location.pathname);

  useEffect(() => {
   
    if (isDonatePage && window.innerWidth >= 1200) {
      setZIndex(9);
    } else {
      setZIndex(4);
    }
  }, [isDonatePage]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setChecked(false); 
  };

  return (
    <Wrapper className={`wrap ${scrolled ? 'scrolled' : ''}`}>
      <div className="header" style={{ zIndex: zIndex }}>
  <Link to="/"
              exact
              className="img"> <img src='./Confide logo 1.png' className="logo" alt="" /></Link>

        <div
          className={checked ? 'hamburger open' : 'hamburger'}
          onClick={() => setChecked(!checked)}
        >
          <span></span>
        </div>
       
        <ul className={checked ? 'menu change' : 'menu'}>
          <li className={`a ${isWhiteLinkPage ? 'white-link' : ''}`}>
            <NavLink
              className="nav-link"
              to="/"
              exact
              onClick={handleLinkClick}
            >
              <a href="">Home</a>
            </NavLink>
          </li>
          <li className={`a ${isWhiteLinkPage ? 'white-link' : ''}`}>
            <NavLink
              className="nav-link"
              to="/About"
              exact
              onClick={handleLinkClick}
            >
              <a href="">About</a>
            </NavLink>
          </li>
          <li className={`a ${isWhiteLinkPage ? 'white-link' : ''}`}>
            <NavLink
              className="nav-link"
              to="/Hospital"
              exact
              onClick={handleLinkClick}
            >
              <a href="">Our Products</a>
            </NavLink>
          </li>
          <li className={`a ${isWhiteLinkPage ? 'white-link' : ''}`}>
            <NavLink
              className="nav-link"
              to="/Contact"
              exact
              onClick={handleLinkClick}
            >
              <a href="">Contact</a>
            </NavLink>
          </li>
          <li className={`leen ${isWhiteLinkPage ? 'white-linky' : ''}`}>
            <NavLink
              className="nav-link"
              to="/Contact"
              exact
              onClick={handleLinkClick}
            >
              <a href="">+263(4)331 307-8</a>
            </NavLink>
          </li>
        </ul>
       
      </div>
    </Wrapper>
  );
}

export default Header;