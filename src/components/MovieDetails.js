import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Wrapper = styled.div`
  h2 {
    text-align: center;
    margin: 60px;
  }
  h3 {
    margin-bottom: 20px;
  }
  img {
    width: 100%;
  }
  .buttoni {
    display: flex;
    width: 100%;
    padding: 14px 0px;
    justify-content: center;
    align-items: center;
    background: black;
    margin-top: 2rem;
    color: #fff;
    border: none;
    border-radius: 5px;
  }

  @media (min-width: 1024px) {
    .flex {
      display: flex;
      gap: 80px;
    }
    .cont {
      margin-top: 30px;
    }
    .button {
      float: right;
      background-color: transparent;
      border: 2px solid black;
      color: black;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px black;
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
  @media (max-width: 1024px) {
    .flex {
      gap: 23px;
    }
  }
  .button {
    float: right;
    background-color: transparent;
    border: 2px solid black;
    color: black;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px black;
    }

    &:active {
      transform: scale(0.9);
    }
    @media (max-width: 1020px) {
      margin-top: 30px;
    }
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 1rem;
  width: 100%;

  input {
    padding: 15px;
    border-radius: 20px;
    border: 2px solid gray;
    background: none;
    transition: all 0.3s ease;

    @media (min-width: 768px) {
      padding: 27px 55px 27px 30px;
    }
    &:focus {
      outline: none;
      border-color: black;
      &::placeholder {
        transform: translateY(-22px);
        font-size: 12px;
        color: black;
      }
    }

    &::placeholder {
      transition: all 0.3s ease;
    }
  }

  @media (min-width: 768px) {
    width: 480px;
  }
`;

function MovieDetails({ movie, onClose }) {
  
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    emailjs
      .send(
        "service_zkgq9d4",
        "template_xmsdsli",
        formData, 
        "TqoSlF59XGOST8wYp" 
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          
        },
        (error) => {
          console.error("Email sending failed:", error);
          
        }
      );

   
    setFormData({
      firstName: "",
      surname: "",
      email: "",
      phoneNumber: "",
    });
  };


  

  return (
    <Wrapper>
      <div>
        <h2>{movie.title}</h2>
        <div className="flex">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />

          <div className="cont">
            <h3> Overview</h3>
            <p>{movie.overview}</p>
            {movie.genres && (
              <div>
                <h3>Genres:</h3>
                <ul>
                  {movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            )}
           <Form onSubmit={handleSubmit}>
            <div className="le">
              <InputContainer>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </InputContainer>
            </div>
            <button type="submit" className="buttoni">
              Get Film
            </button>
          </Form>
          </div>
        </div>
        <button className="button " onClick={onClose}>
          Close
        </button>
      </div>
    </Wrapper>
  );
}

export default MovieDetails;
